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

    List<Game> generateGamesFor(Set<Team> teams) {
        /*
        Generate duels for each team against each other
        Generate deathmatches for all teams and half of the teams
        Generate team matches for 2vs2 and half against the other half (+2 more team games with shuffled teams)
         */

        List<Game> games = []

        // Duels
        for (int i = 0; i < teams.size(); i++) {
            Team t1 = teams[i]
            for (int j = i; j < teams.size(); j++) {
                Team t2 = teams[j]

                // Don't play against yourself
                if (!t1.equals(t2)) {
                    Game game = getRandomGame()

                    GameTeam gt1 = new GameTeam()
                    gt1.addToTeams(t1)
                    int teamColor1 = i%TeamColor.values().size()
                    gt1.color = TeamColor.values()[teamColor1]

                    GameTeam gt2 = new GameTeam()
                    gt2.addToTeams(t2)
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

        // Deathmatches
        Game game = getRandomGame()
        for (int i = 0; i < teams.size(); i++) {
            Team team = teams[i]

            GameTeam gt = new GameTeam()
            gt.addToTeams(team)
            int teamColor = i % TeamColor.values().size()
            gt.color = TeamColor.values()[teamColor]

            game.addToGameTeams(gt)
        }
        game.save flush:true
        games.add(game)

        // Team matches
        // Check if we have undividable amount of teams
        if (isPrime(teams.size())) {
            // What we do....
        } else {

        }

        return games
    }

    private Game getRandomGame() {
        final int MAX_DARKNESS = Game.constraints.darkness.getAppliedConstraint("max").maxValue
        final int MAX_RAIN = Game.constraints.rain.getAppliedConstraint("max").maxValue

        Game game = new Game()
        game.mode = GameMode.DEATHMATCH
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

    private boolean isPrime(int n) {
        //check if n is a multiple of 2
        if (n%2==0) return false;
        //if not, then just check the odds
        for(int i=3;i*i<=n;i+=2) {
            if(n%i==0)
                return false;
        }
        return true;
    }
}
