package botkill.gameconsole

import botkill.gameconsole.enums.GameEnvironment
import botkill.gameconsole.enums.GameMode
import botkill.gameconsole.enums.TeamColor
import grails.transaction.Transactional
import org.springframework.beans.factory.InitializingBean

@Transactional
class TournamentService implements InitializingBean {

    private Random random

    @Override
    void afterPropertiesSet() throws Exception {
        random = new Random()
    }

    List<Game> generateGamesFor(List<TournamentTeam> teams) {
        /*
        Generate duels for each team against each other
        Generate deathmatch for all teams and half of the teams
        Generate team matches for 2vs2 and half against the other half (+2 more team games with shuffled teams)
         */

        List<Game> games = []

        // First shuffle teams set just in case
        Collections.shuffle(teams, random)

        // Duels
        for (int i = 0; i < teams.size(); i++) {
            TournamentTeam t1 = teams[i]
            for (int j = i; j < teams.size(); j++) {
                TournamentTeam t2 = teams[j]

                // Don't play against yourself
                if (!t1.equals(t2)) {
                    Game game = getRandomGame(GameMode.DUEL)

                    GameTeam gt1 = new GameTeam()
                    gt1.team = t1.team
                    int teamColor1 = i%TeamColor.values().size()
                    gt1.color = TeamColor.values()[teamColor1]

                    GameTeam gt2 = new GameTeam()
                    gt2.team = t2.team
                    int teamColor2 = j%TeamColor.values().size()
                    // Don't use same color for both of the teams
                    if (teamColor1 == teamColor2) {
                        teamColor2++
                        teamColor2 = teamColor2%TeamColor.values().size()
                    }
                    gt2.color = TeamColor.values()[teamColor2]

                    game.addToGameTeams(gt1).addToGameTeams(gt2)
                    game.save flush:true
                    games.add(game)
                }
            }
        }

        // Deathmatches with all the players against each other
        Game deathmatch = getRandomGame(GameMode.DEATHMATCH)
        for (int i = 0; i < teams.size(); i++) {
            TournamentTeam tt = teams[i]

            GameTeam gt = new GameTeam()
            gt.team = tt.team
            int teamColor = i % TeamColor.values().size()
            gt.color = TeamColor.values()[teamColor]

            deathmatch.addToGameTeams(gt)
        }
        deathmatch.save flush:true
        games.add(deathmatch)

        // Team matches. Possible only with >= 4 teams. Which is constrained in the domain class also.
        if (teams.size() >= 4) {
            int teamSize = 0
            // Check if we have undividable amount of teams
            if (isPrime(teams.size())) {
                // One player have to duplicate the bot
                // Set team size so that only one team is missing 1 AIs
                teamSize = (teams.size() + 1) / 2
            } else {
                // Find the greatest team size
                for (int i = teams.size() / 2; i >= 3; i--) {
                    teamSize = i
                    if (teams.size() % teamSize == 0) break
                }
                assert teamSize > 0
            }
            // Create teams with the greatest amount of AIs per team
            Game game = createTeamGame(teams, teamSize)
            games.add(game)

            // Shuffle teams
            Collections.shuffle(teams, random)

            // Create another game with the same team size but shuffled teams
            game = createTeamGame(teams, teamSize)
            games.add(game)

            // Shuffle again
            Collections.shuffle(teams, random)

            // Find the smallest team size
            if (isPrime(teams.size())) {
                teamSize = 2
            } else{
                // Find the smallest team size
                for (int i = 2; i < teams.size()/2; i++) {
                    teamSize = i
                    if (teams.size() % teamSize == 0) break
                }
                assert teamSize > 0
            }

            // Create teams with the smallest amount of AIs per team
            game = createTeamGame(teams, teamSize)
            games.add(game)

            // Shuffle teams
            Collections.shuffle(teams, random)

            // Create another game with the same team size but shuffled teams
            game = createTeamGame(teams, teamSize)
            games.add(game)
        }

        return games
    }

    private Game createTeamGame(List<TournamentTeam> teams, int teamSize) {
        int numberOfTeams = Math.ceil(teams.size()/teamSize)

        Game game = getRandomGame(GameMode.TEAM)
        int overflows = 0
        for (int i = 0; i < numberOfTeams; i++) {
            int teamColor = i % TeamColor.values().size()
            for (int j = 0; j < teamSize; j++) {
                GameTeam gt = new GameTeam()
                gt.color = TeamColor.values()[teamColor]
                TournamentTeam team
                // Prevent overflow and use one team as an extra bot
                if (i*teamSize+j > teams.size() - 1) {
                    overflows++
                    team = teams[i*teamSize+j-overflows]
                } else {
                    team = teams[i*teamSize+j]
                }
                gt.team = team.team
                game.addToGameTeams(gt)
            }
        }

        game.save flush:true

        return game
    }

    private Game getRandomGame(GameMode mode) {
        final int MAX_DARKNESS = Game.constraints.darkness.getAppliedConstraint("max").maxValue
        final int MAX_RAIN = Game.constraints.rain.getAppliedConstraint("max").maxValue

        Game game = new Game()
        game.mode = mode
        game.environment = GameEnvironment.values()[random.nextInt(GameEnvironment.values().size()) as int]
        game.darkness = random.nextInt(MAX_DARKNESS)
        game.rain = random.nextInt(MAX_RAIN)
        game.rounds = 3
        game.roundTime = 300 // 5 mins

        // Cavern is darker and there's no rain
        if (game.environment == GameEnvironment.CAVERN) {
            game.darkness = Math.min(MAX_DARKNESS as double, game.darkness*1.3 as double) as int
            game.rain = 0
        }
        return game
    }

    public static boolean isPrime(int n) {
        // Check if n is a multiple of 2
        if (n % 2 == 0) return false;
        // If not, then just check the odds
        for(int i = 3; i * i <= n; i += 2) {
            if(n % i == 0)
                return false;
        }
        return true;
    }
}
