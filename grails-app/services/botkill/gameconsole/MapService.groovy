package botkill.gameconsole

import botkill.gameconsole.enums.GameEnvironment
import grails.plugins.rest.client.RestBuilder
import org.codehaus.groovy.grails.web.json.JSONArray
import org.codehaus.groovy.grails.web.json.JSONObject

class MapService {

    def rest = new RestBuilder()

    def getMap(int playerCount, GameEnvironment environment) {
        final float SCREEN_RATIO = 16/9
        int width = 10 * playerCount + 30
        int height = Math.floor(width/SCREEN_RATIO)

        String mapData = '{"startingPoints":[{"Type":"Start","X":43,"Y":11},{"Type":"Start","X":19,"Y":27},{"Type":"Start","X":45,"Y":30}],"tiles":[{"Type":"Wall","X":0,"Y":0},{"Type":"Wall","X":1,"Y":0},{"Type":"Wall","X":2,"Y":0},{"Type":"Wall","X":3,"Y":0},{"Type":"Wall","X":4,"Y":0},{"Type":"Wall","X":5,"Y":0},{"Type":"Wall","X":6,"Y":0},{"Type":"Wall","X":7,"Y":0},{"Type":"Wall","X":8,"Y":0},{"Type":"Wall","X":9,"Y":0},{"Type":"Wall","X":10,"Y":0},{"Type":"Wall","X":11,"Y":0},{"Type":"Wall","X":12,"Y":0},{"Type":"Wall","X":13,"Y":0},{"Type":"Wall","X":14,"Y":0},{"Type":"Wall","X":15,"Y":0},{"Type":"Wall","X":16,"Y":0},{"Type":"Wall","X":17,"Y":0},{"Type":"Wall","X":18,"Y":0},{"Type":"Wall","X":19,"Y":0},{"Type":"Wall","X":20,"Y":0},{"Type":"Wall","X":21,"Y":0},{"Type":"Wall","X":22,"Y":0},{"Type":"Wall","X":23,"Y":0},{"Type":"Wall","X":24,"Y":0},{"Type":"Wall","X":25,"Y":0},{"Type":"Wall","X":26,"Y":0},{"Type":"Wall","X":27,"Y":0},{"Type":"Wall","X":28,"Y":0},{"Type":"Wall","X":29,"Y":0},{"Type":"Wall","X":30,"Y":0},{"Type":"Wall","X":31,"Y":0},{"Type":"Wall","X":32,"Y":0},{"Type":"Wall","X":33,"Y":0},{"Type":"Wall","X":34,"Y":0},{"Type":"Wall","X":35,"Y":0},{"Type":"Wall","X":36,"Y":0},{"Type":"Wall","X":37,"Y":0},{"Type":"Wall","X":38,"Y":0},{"Type":"Wall","X":39,"Y":0},{"Type":"Wall","X":40,"Y":0},{"Type":"Wall","X":41,"Y":0},{"Type":"Wall","X":42,"Y":0},{"Type":"Wall","X":43,"Y":0},{"Type":"Wall","X":44,"Y":0},{"Type":"Wall","X":45,"Y":0},{"Type":"Wall","X":46,"Y":0},{"Type":"Wall","X":47,"Y":0},{"Type":"Wall","X":48,"Y":0},{"Type":"Wall","X":49,"Y":0},{"Type":"Wall","X":50,"Y":0},{"Type":"Wall","X":51,"Y":0},{"Type":"Wall","X":52,"Y":0},{"Type":"Wall","X":53,"Y":0},{"Type":"Wall","X":54,"Y":0},{"Type":"Wall","X":55,"Y":0},{"Type":"Wall","X":56,"Y":0},{"Type":"Wall","X":57,"Y":0},{"Type":"Wall","X":58,"Y":0},{"Type":"Wall","X":59,"Y":0},{"Type":"Wall","X":0,"Y":1},{"Type":"Wall","X":1,"Y":1},{"Type":"Wall","X":2,"Y":1},{"Type":"Wall","X":3,"Y":1},{"Type":"Wall","X":4,"Y":1},{"Type":"Wall","X":5,"Y":1},{"Type":"Wall","X":6,"Y":1},{"Type":"Wall","X":7,"Y":1},{"Type":"Wall","X":8,"Y":1},{"Type":"Wall","X":9,"Y":1},{"Type":"Wall","X":10,"Y":1},{"Type":"Wall","X":11,"Y":1},{"Type":"Wall","X":12,"Y":1},{"Type":"Wall","X":13,"Y":1},{"Type":"Wall","X":14,"Y":1},{"Type":"Wall","X":15,"Y":1},{"Type":"Wall","X":16,"Y":1},{"Type":"Wall","X":17,"Y":1},{"Type":"Wall","X":18,"Y":1},{"Type":"Wall","X":19,"Y":1},{"Type":"Wall","X":20,"Y":1},{"Type":"Wall","X":21,"Y":1},{"Type":"Wall","X":22,"Y":1},{"Type":"Wall","X":23,"Y":1},{"Type":"Wall","X":24,"Y":1},{"Type":"Wall","X":25,"Y":1},{"Type":"Wall","X":26,"Y":1},{"Type":"Wall","X":27,"Y":1},{"Type":"Wall","X":28,"Y":1},{"Type":"Wall","X":29,"Y":1},{"Type":"Wall","X":30,"Y":1},{"Type":"Wall","X":31,"Y":1},{"Type":"Wall","X":32,"Y":1},{"Type":"Wall","X":33,"Y":1},{"Type":"Wall","X":37,"Y":1},{"Type":"Wall","X":38,"Y":1},{"Type":"Wall","X":39,"Y":1},{"Type":"Wall","X":40,"Y":1},{"Type":"Wall","X":41,"Y":1},{"Type":"Wall","X":42,"Y":1},{"Type":"Wall","X":43,"Y":1},{"Type":"Wall","X":44,"Y":1},{"Type":"Wall","X":45,"Y":1},{"Type":"Wall","X":46,"Y":1},{"Type":"Wall","X":47,"Y":1},{"Type":"Wall","X":48,"Y":1},{"Type":"Wall","X":49,"Y":1},{"Type":"Wall","X":50,"Y":1},{"Type":"Wall","X":51,"Y":1},{"Type":"Wall","X":52,"Y":1},{"Type":"Wall","X":53,"Y":1},{"Type":"Wall","X":54,"Y":1},{"Type":"Wall","X":55,"Y":1},{"Type":"Wall","X":56,"Y":1},{"Type":"Wall","X":57,"Y":1},{"Type":"Wall","X":58,"Y":1},{"Type":"Wall","X":59,"Y":1},{"Type":"Wall","X":0,"Y":2},{"Type":"Wall","X":1,"Y":2},{"Type":"Wall","X":2,"Y":2},{"Type":"Wall","X":3,"Y":2},{"Type":"Wall","X":4,"Y":2},{"Type":"Wall","X":5,"Y":2},{"Type":"Wall","X":6,"Y":2},{"Type":"Wall","X":7,"Y":2},{"Type":"Wall","X":8,"Y":2},{"Type":"Wall","X":9,"Y":2},{"Type":"Wall","X":10,"Y":2},{"Type":"Wall","X":11,"Y":2},{"Type":"Wall","X":15,"Y":2},{"Type":"Wall","X":16,"Y":2},{"Type":"Wall","X":17,"Y":2},{"Type":"Wall","X":18,"Y":2},{"Type":"Wall","X":19,"Y":2},{"Type":"Wall","X":20,"Y":2},{"Type":"Wall","X":21,"Y":2},{"Type":"Wall","X":22,"Y":2},{"Type":"Wall","X":23,"Y":2},{"Type":"Wall","X":24,"Y":2},{"Type":"Wall","X":25,"Y":2},{"Type":"Wall","X":26,"Y":2},{"Type":"Wall","X":27,"Y":2},{"Type":"Wall","X":28,"Y":2},{"Type":"Wall","X":29,"Y":2},{"Type":"Wall","X":30,"Y":2},{"Type":"Wall","X":31,"Y":2},{"Type":"Wall","X":44,"Y":2},{"Type":"Wall","X":45,"Y":2},{"Type":"Wall","X":46,"Y":2},{"Type":"Wall","X":47,"Y":2},{"Type":"Wall","X":48,"Y":2},{"Type":"Wall","X":49,"Y":2},{"Type":"Wall","X":50,"Y":2},{"Type":"Wall","X":51,"Y":2},{"Type":"Wall","X":52,"Y":2},{"Type":"Wall","X":53,"Y":2},{"Type":"Wall","X":54,"Y":2},{"Type":"Wall","X":55,"Y":2},{"Type":"Wall","X":56,"Y":2},{"Type":"Wall","X":57,"Y":2},{"Type":"Wall","X":58,"Y":2},{"Type":"Wall","X":59,"Y":2},{"Type":"Wall","X":0,"Y":3},{"Type":"Wall","X":1,"Y":3},{"Type":"Wall","X":2,"Y":3},{"Type":"Wall","X":3,"Y":3},{"Type":"Wall","X":4,"Y":3},{"Type":"Wall","X":5,"Y":3},{"Type":"Wall","X":6,"Y":3},{"Type":"Wall","X":7,"Y":3},{"Type":"Wall","X":8,"Y":3},{"Type":"Wall","X":9,"Y":3},{"Type":"Wall","X":10,"Y":3},{"Type":"Wall","X":11,"Y":3},{"Type":"Wall","X":16,"Y":3},{"Type":"Wall","X":17,"Y":3},{"Type":"Wall","X":18,"Y":3},{"Type":"Wall","X":19,"Y":3},{"Type":"Wall","X":20,"Y":3},{"Type":"Wall","X":21,"Y":3},{"Type":"Wall","X":22,"Y":3},{"Type":"Wall","X":23,"Y":3},{"Type":"Wall","X":24,"Y":3},{"Type":"Wall","X":25,"Y":3},{"Type":"Wall","X":45,"Y":3},{"Type":"Wall","X":46,"Y":3},{"Type":"Wall","X":50,"Y":3},{"Type":"Wall","X":51,"Y":3},{"Type":"Wall","X":52,"Y":3},{"Type":"Wall","X":53,"Y":3},{"Type":"Wall","X":54,"Y":3},{"Type":"Wall","X":55,"Y":3},{"Type":"Wall","X":56,"Y":3},{"Type":"Wall","X":57,"Y":3},{"Type":"Wall","X":58,"Y":3},{"Type":"Wall","X":59,"Y":3},{"Type":"Wall","X":0,"Y":4},{"Type":"Wall","X":1,"Y":4},{"Type":"Wall","X":2,"Y":4},{"Type":"Wall","X":3,"Y":4},{"Type":"Wall","X":4,"Y":4},{"Type":"Wall","X":5,"Y":4},{"Type":"Wall","X":8,"Y":4},{"Type":"Wall","X":9,"Y":4},{"Type":"Wall","X":10,"Y":4},{"Type":"Wall","X":11,"Y":4},{"Type":"Wall","X":16,"Y":4},{"Type":"Wall","X":17,"Y":4},{"Type":"Wall","X":18,"Y":4},{"Type":"Wall","X":19,"Y":4},{"Type":"Wall","X":20,"Y":4},{"Type":"Wall","X":21,"Y":4},{"Type":"Wall","X":22,"Y":4},{"Type":"Wall","X":23,"Y":4},{"Type":"Wall","X":24,"Y":4},{"Type":"Wall","X":42,"Y":4},{"Type":"Wall","X":43,"Y":4},{"Type":"Wall","X":50,"Y":4},{"Type":"Wall","X":51,"Y":4},{"Type":"Wall","X":52,"Y":4},{"Type":"Wall","X":53,"Y":4},{"Type":"Wall","X":54,"Y":4},{"Type":"Wall","X":58,"Y":4},{"Type":"Wall","X":59,"Y":4},{"Type":"Wall","X":0,"Y":5},{"Type":"Wall","X":1,"Y":5},{"Type":"Wall","X":2,"Y":5},{"Type":"Wall","X":3,"Y":5},{"Type":"Wall","X":4,"Y":5},{"Type":"Wall","X":5,"Y":5},{"Type":"Wall","X":8,"Y":5},{"Type":"Wall","X":9,"Y":5},{"Type":"Wall","X":10,"Y":5},{"Type":"Wall","X":11,"Y":5},{"Type":"Wall","X":16,"Y":5},{"Type":"Wall","X":17,"Y":5},{"Type":"Wall","X":18,"Y":5},{"Type":"Wall","X":19,"Y":5},{"Type":"Wall","X":20,"Y":5},{"Type":"Wall","X":21,"Y":5},{"Type":"Wall","X":22,"Y":5},{"Type":"Wall","X":23,"Y":5},{"Type":"Wall","X":24,"Y":5},{"Type":"Wall","X":31,"Y":5},{"Type":"Wall","X":32,"Y":5},{"Type":"Wall","X":33,"Y":5},{"Type":"Wall","X":42,"Y":5},{"Type":"Wall","X":43,"Y":5},{"Type":"Wall","X":44,"Y":5},{"Type":"Wall","X":48,"Y":5},{"Type":"Wall","X":49,"Y":5},{"Type":"Wall","X":50,"Y":5},{"Type":"Wall","X":51,"Y":5},{"Type":"Wall","X":52,"Y":5},{"Type":"Wall","X":53,"Y":5},{"Type":"Wall","X":59,"Y":5},{"Type":"Wall","X":0,"Y":6},{"Type":"Wall","X":1,"Y":6},{"Type":"Wall","X":2,"Y":6},{"Type":"Wall","X":3,"Y":6},{"Type":"Wall","X":4,"Y":6},{"Type":"Wall","X":9,"Y":6},{"Type":"Wall","X":10,"Y":6},{"Type":"Wall","X":15,"Y":6},{"Type":"Wall","X":16,"Y":6},{"Type":"Wall","X":17,"Y":6},{"Type":"Wall","X":18,"Y":6},{"Type":"Wall","X":19,"Y":6},{"Type":"Wall","X":20,"Y":6},{"Type":"Wall","X":21,"Y":6},{"Type":"Wall","X":22,"Y":6},{"Type":"Wall","X":23,"Y":6},{"Type":"Wall","X":30,"Y":6},{"Type":"Wall","X":31,"Y":6},{"Type":"Wall","X":32,"Y":6},{"Type":"Wall","X":33,"Y":6},{"Type":"Wall","X":42,"Y":6},{"Type":"Wall","X":43,"Y":6},{"Type":"Wall","X":47,"Y":6},{"Type":"Wall","X":48,"Y":6},{"Type":"Wall","X":49,"Y":6},{"Type":"Wall","X":50,"Y":6},{"Type":"Wall","X":51,"Y":6},{"Type":"Wall","X":52,"Y":6},{"Type":"Wall","X":53,"Y":6},{"Type":"Wall","X":59,"Y":6},{"Type":"Wall","X":0,"Y":7},{"Type":"Wall","X":1,"Y":7},{"Type":"Wall","X":2,"Y":7},{"Type":"Wall","X":3,"Y":7},{"Type":"Wall","X":14,"Y":7},{"Type":"Wall","X":15,"Y":7},{"Type":"Wall","X":16,"Y":7},{"Type":"Wall","X":17,"Y":7},{"Type":"Wall","X":18,"Y":7},{"Type":"Wall","X":19,"Y":7},{"Type":"Wall","X":20,"Y":7},{"Type":"Wall","X":30,"Y":7},{"Type":"Wall","X":31,"Y":7},{"Type":"Wall","X":32,"Y":7},{"Type":"Wall","X":33,"Y":7},{"Type":"Wall","X":36,"Y":7},{"Type":"Wall","X":37,"Y":7},{"Type":"Wall","X":38,"Y":7},{"Type":"Wall","X":39,"Y":7},{"Type":"Wall","X":46,"Y":7},{"Type":"Wall","X":47,"Y":7},{"Type":"Wall","X":48,"Y":7},{"Type":"Wall","X":49,"Y":7},{"Type":"Wall","X":50,"Y":7},{"Type":"Wall","X":51,"Y":7},{"Type":"Wall","X":52,"Y":7},{"Type":"Wall","X":53,"Y":7},{"Type":"Wall","X":54,"Y":7},{"Type":"Wall","X":58,"Y":7},{"Type":"Wall","X":59,"Y":7},{"Type":"Wall","X":0,"Y":8},{"Type":"Wall","X":1,"Y":8},{"Type":"Wall","X":2,"Y":8},{"Type":"Wall","X":3,"Y":8},{"Type":"Wall","X":13,"Y":8},{"Type":"Wall","X":14,"Y":8},{"Type":"Wall","X":15,"Y":8},{"Type":"Wall","X":16,"Y":8},{"Type":"Wall","X":17,"Y":8},{"Type":"Wall","X":18,"Y":8},{"Type":"Wall","X":19,"Y":8},{"Type":"Wall","X":30,"Y":8},{"Type":"Wall","X":31,"Y":8},{"Type":"Wall","X":32,"Y":8},{"Type":"Wall","X":33,"Y":8},{"Type":"Wall","X":35,"Y":8},{"Type":"Wall","X":36,"Y":8},{"Type":"Wall","X":37,"Y":8},{"Type":"Wall","X":38,"Y":8},{"Type":"Wall","X":39,"Y":8},{"Type":"Wall","X":40,"Y":8},{"Type":"Wall","X":46,"Y":8},{"Type":"Wall","X":47,"Y":8},{"Type":"Wall","X":48,"Y":8},{"Type":"Wall","X":49,"Y":8},{"Type":"Wall","X":50,"Y":8},{"Type":"Wall","X":51,"Y":8},{"Type":"Wall","X":52,"Y":8},{"Type":"Wall","X":53,"Y":8},{"Type":"Wall","X":54,"Y":8},{"Type":"Wall","X":55,"Y":8},{"Type":"Wall","X":58,"Y":8},{"Type":"Wall","X":59,"Y":8},{"Type":"Wall","X":0,"Y":9},{"Type":"Wall","X":1,"Y":9},{"Type":"Wall","X":2,"Y":9},{"Type":"Wall","X":3,"Y":9},{"Type":"Wall","X":13,"Y":9},{"Type":"Wall","X":14,"Y":9},{"Type":"Wall","X":15,"Y":9},{"Type":"Wall","X":16,"Y":9},{"Type":"Wall","X":17,"Y":9},{"Type":"Wall","X":18,"Y":9},{"Type":"Wall","X":29,"Y":9},{"Type":"Wall","X":30,"Y":9},{"Type":"Wall","X":31,"Y":9},{"Type":"Wall","X":32,"Y":9},{"Type":"Wall","X":35,"Y":9},{"Type":"Wall","X":36,"Y":9},{"Type":"Wall","X":37,"Y":9},{"Type":"Wall","X":38,"Y":9},{"Type":"Wall","X":39,"Y":9},{"Type":"Wall","X":40,"Y":9},{"Type":"Wall","X":47,"Y":9},{"Type":"Wall","X":48,"Y":9},{"Type":"Wall","X":49,"Y":9},{"Type":"Wall","X":50,"Y":9},{"Type":"Wall","X":51,"Y":9},{"Type":"Wall","X":52,"Y":9},{"Type":"Wall","X":53,"Y":9},{"Type":"Wall","X":54,"Y":9},{"Type":"Wall","X":55,"Y":9},{"Type":"Wall","X":58,"Y":9},{"Type":"Wall","X":59,"Y":9},{"Type":"Wall","X":0,"Y":10},{"Type":"Wall","X":1,"Y":10},{"Type":"Wall","X":2,"Y":10},{"Type":"Wall","X":3,"Y":10},{"Type":"Wall","X":4,"Y":10},{"Type":"Wall","X":13,"Y":10},{"Type":"Wall","X":14,"Y":10},{"Type":"Wall","X":15,"Y":10},{"Type":"Wall","X":16,"Y":10},{"Type":"Wall","X":17,"Y":10},{"Type":"Wall","X":27,"Y":10},{"Type":"Wall","X":28,"Y":10},{"Type":"Wall","X":29,"Y":10},{"Type":"Wall","X":30,"Y":10},{"Type":"Wall","X":31,"Y":10},{"Type":"Wall","X":32,"Y":10},{"Type":"Wall","X":35,"Y":10},{"Type":"Wall","X":36,"Y":10},{"Type":"Wall","X":37,"Y":10},{"Type":"Wall","X":38,"Y":10},{"Type":"Wall","X":39,"Y":10},{"Type":"Wall","X":40,"Y":10},{"Type":"Wall","X":48,"Y":10},{"Type":"Wall","X":49,"Y":10},{"Type":"Wall","X":50,"Y":10},{"Type":"Wall","X":51,"Y":10},{"Type":"Wall","X":52,"Y":10},{"Type":"Wall","X":53,"Y":10},{"Type":"Wall","X":54,"Y":10},{"Type":"Wall","X":55,"Y":10},{"Type":"Wall","X":58,"Y":10},{"Type":"Wall","X":59,"Y":10},{"Type":"Wall","X":0,"Y":11},{"Type":"Wall","X":1,"Y":11},{"Type":"Wall","X":2,"Y":11},{"Type":"Wall","X":3,"Y":11},{"Type":"Wall","X":4,"Y":11},{"Type":"Wall","X":5,"Y":11},{"Type":"Wall","X":15,"Y":11},{"Type":"Wall","X":16,"Y":11},{"Type":"Wall","X":26,"Y":11},{"Type":"Wall","X":27,"Y":11},{"Type":"Wall","X":28,"Y":11},{"Type":"Wall","X":29,"Y":11},{"Type":"Wall","X":30,"Y":11},{"Type":"Wall","X":31,"Y":11},{"Type":"Wall","X":35,"Y":11},{"Type":"Wall","X":36,"Y":11},{"Type":"Wall","X":37,"Y":11},{"Type":"Wall","X":38,"Y":11},{"Type":"Wall","X":39,"Y":11},{"Type":"Wall","X":48,"Y":11},{"Type":"Wall","X":49,"Y":11},{"Type":"Wall","X":50,"Y":11},{"Type":"Wall","X":51,"Y":11},{"Type":"Wall","X":52,"Y":11},{"Type":"Wall","X":53,"Y":11},{"Type":"Wall","X":54,"Y":11},{"Type":"Wall","X":55,"Y":11},{"Type":"Wall","X":58,"Y":11},{"Type":"Wall","X":59,"Y":11},{"Type":"Wall","X":0,"Y":12},{"Type":"Wall","X":1,"Y":12},{"Type":"Wall","X":2,"Y":12},{"Type":"Wall","X":3,"Y":12},{"Type":"Wall","X":4,"Y":12},{"Type":"Wall","X":5,"Y":12},{"Type":"Wall","X":20,"Y":12},{"Type":"Wall","X":21,"Y":12},{"Type":"Wall","X":26,"Y":12},{"Type":"Wall","X":27,"Y":12},{"Type":"Wall","X":28,"Y":12},{"Type":"Wall","X":29,"Y":12},{"Type":"Wall","X":30,"Y":12},{"Type":"Wall","X":36,"Y":12},{"Type":"Wall","X":37,"Y":12},{"Type":"Wall","X":38,"Y":12},{"Type":"Wall","X":49,"Y":12},{"Type":"Wall","X":50,"Y":12},{"Type":"Wall","X":51,"Y":12},{"Type":"Wall","X":52,"Y":12},{"Type":"Wall","X":53,"Y":12},{"Type":"Wall","X":54,"Y":12},{"Type":"Wall","X":55,"Y":12},{"Type":"Wall","X":58,"Y":12},{"Type":"Wall","X":59,"Y":12},{"Type":"Wall","X":0,"Y":13},{"Type":"Wall","X":1,"Y":13},{"Type":"Wall","X":2,"Y":13},{"Type":"Wall","X":3,"Y":13},{"Type":"Wall","X":4,"Y":13},{"Type":"Wall","X":5,"Y":13},{"Type":"Wall","X":19,"Y":13},{"Type":"Wall","X":20,"Y":13},{"Type":"Wall","X":21,"Y":13},{"Type":"Wall","X":22,"Y":13},{"Type":"Wall","X":26,"Y":13},{"Type":"Wall","X":27,"Y":13},{"Type":"Wall","X":28,"Y":13},{"Type":"Wall","X":54,"Y":13},{"Type":"Wall","X":59,"Y":13},{"Type":"Wall","X":0,"Y":14},{"Type":"Wall","X":1,"Y":14},{"Type":"Wall","X":2,"Y":14},{"Type":"Wall","X":3,"Y":14},{"Type":"Wall","X":4,"Y":14},{"Type":"Wall","X":16,"Y":14},{"Type":"Wall","X":17,"Y":14},{"Type":"Wall","X":18,"Y":14},{"Type":"Wall","X":19,"Y":14},{"Type":"Wall","X":20,"Y":14},{"Type":"Wall","X":21,"Y":14},{"Type":"Wall","X":22,"Y":14},{"Type":"Wall","X":25,"Y":14},{"Type":"Wall","X":26,"Y":14},{"Type":"Wall","X":27,"Y":14},{"Type":"Wall","X":47,"Y":14},{"Type":"Wall","X":48,"Y":14},{"Type":"Wall","X":59,"Y":14},{"Type":"Wall","X":0,"Y":15},{"Type":"Wall","X":1,"Y":15},{"Type":"Wall","X":2,"Y":15},{"Type":"Wall","X":15,"Y":15},{"Type":"Wall","X":16,"Y":15},{"Type":"Wall","X":17,"Y":15},{"Type":"Wall","X":18,"Y":15},{"Type":"Wall","X":19,"Y":15},{"Type":"Wall","X":20,"Y":15},{"Type":"Wall","X":21,"Y":15},{"Type":"Wall","X":25,"Y":15},{"Type":"Wall","X":26,"Y":15},{"Type":"Wall","X":27,"Y":15},{"Type":"Wall","X":45,"Y":15},{"Type":"Wall","X":46,"Y":15},{"Type":"Wall","X":47,"Y":15},{"Type":"Wall","X":48,"Y":15},{"Type":"Wall","X":49,"Y":15},{"Type":"Wall","X":59,"Y":15},{"Type":"Wall","X":0,"Y":16},{"Type":"Wall","X":1,"Y":16},{"Type":"Wall","X":15,"Y":16},{"Type":"Wall","X":16,"Y":16},{"Type":"Wall","X":17,"Y":16},{"Type":"Wall","X":18,"Y":16},{"Type":"Wall","X":19,"Y":16},{"Type":"Wall","X":20,"Y":16},{"Type":"Wall","X":24,"Y":16},{"Type":"Wall","X":25,"Y":16},{"Type":"Wall","X":26,"Y":16},{"Type":"Wall","X":27,"Y":16},{"Type":"Wall","X":28,"Y":16},{"Type":"Wall","X":44,"Y":16},{"Type":"Wall","X":45,"Y":16},{"Type":"Wall","X":46,"Y":16},{"Type":"Wall","X":47,"Y":16},{"Type":"Wall","X":48,"Y":16},{"Type":"Wall","X":49,"Y":16},{"Type":"Wall","X":58,"Y":16},{"Type":"Wall","X":59,"Y":16},{"Type":"Wall","X":0,"Y":17},{"Type":"Wall","X":1,"Y":17},{"Type":"Wall","X":10,"Y":17},{"Type":"Wall","X":15,"Y":17},{"Type":"Wall","X":16,"Y":17},{"Type":"Wall","X":17,"Y":17},{"Type":"Wall","X":18,"Y":17},{"Type":"Wall","X":19,"Y":17},{"Type":"Wall","X":23,"Y":17},{"Type":"Wall","X":24,"Y":17},{"Type":"Wall","X":25,"Y":17},{"Type":"Wall","X":26,"Y":17},{"Type":"Wall","X":27,"Y":17},{"Type":"Wall","X":28,"Y":17},{"Type":"Wall","X":29,"Y":17},{"Type":"Wall","X":30,"Y":17},{"Type":"Wall","X":44,"Y":17},{"Type":"Wall","X":45,"Y":17},{"Type":"Wall","X":46,"Y":17},{"Type":"Wall","X":47,"Y":17},{"Type":"Wall","X":48,"Y":17},{"Type":"Wall","X":49,"Y":17},{"Type":"Wall","X":50,"Y":17},{"Type":"Wall","X":57,"Y":17},{"Type":"Wall","X":58,"Y":17},{"Type":"Wall","X":59,"Y":17},{"Type":"Wall","X":0,"Y":18},{"Type":"Wall","X":1,"Y":18},{"Type":"Wall","X":9,"Y":18},{"Type":"Wall","X":10,"Y":18},{"Type":"Wall","X":11,"Y":18},{"Type":"Wall","X":15,"Y":18},{"Type":"Wall","X":16,"Y":18},{"Type":"Wall","X":17,"Y":18},{"Type":"Wall","X":18,"Y":18},{"Type":"Wall","X":22,"Y":18},{"Type":"Wall","X":23,"Y":18},{"Type":"Wall","X":24,"Y":18},{"Type":"Wall","X":25,"Y":18},{"Type":"Wall","X":26,"Y":18},{"Type":"Wall","X":27,"Y":18},{"Type":"Wall","X":28,"Y":18},{"Type":"Wall","X":29,"Y":18},{"Type":"Wall","X":30,"Y":18},{"Type":"Wall","X":31,"Y":18},{"Type":"Wall","X":44,"Y":18},{"Type":"Wall","X":45,"Y":18},{"Type":"Wall","X":46,"Y":18},{"Type":"Wall","X":47,"Y":18},{"Type":"Wall","X":48,"Y":18},{"Type":"Wall","X":49,"Y":18},{"Type":"Wall","X":50,"Y":18},{"Type":"Wall","X":51,"Y":18},{"Type":"Wall","X":52,"Y":18},{"Type":"Wall","X":56,"Y":18},{"Type":"Wall","X":57,"Y":18},{"Type":"Wall","X":58,"Y":18},{"Type":"Wall","X":59,"Y":18},{"Type":"Wall","X":0,"Y":19},{"Type":"Wall","X":1,"Y":19},{"Type":"Wall","X":4,"Y":19},{"Type":"Wall","X":5,"Y":19},{"Type":"Wall","X":6,"Y":19},{"Type":"Wall","X":9,"Y":19},{"Type":"Wall","X":10,"Y":19},{"Type":"Wall","X":11,"Y":19},{"Type":"Wall","X":14,"Y":19},{"Type":"Wall","X":15,"Y":19},{"Type":"Wall","X":16,"Y":19},{"Type":"Wall","X":17,"Y":19},{"Type":"Wall","X":18,"Y":19},{"Type":"Wall","X":21,"Y":19},{"Type":"Wall","X":22,"Y":19},{"Type":"Wall","X":23,"Y":19},{"Type":"Wall","X":24,"Y":19},{"Type":"Wall","X":25,"Y":19},{"Type":"Wall","X":26,"Y":19},{"Type":"Wall","X":27,"Y":19},{"Type":"Wall","X":28,"Y":19},{"Type":"Wall","X":29,"Y":19},{"Type":"Wall","X":30,"Y":19},{"Type":"Wall","X":31,"Y":19},{"Type":"Wall","X":43,"Y":19},{"Type":"Wall","X":44,"Y":19},{"Type":"Wall","X":45,"Y":19},{"Type":"Wall","X":46,"Y":19},{"Type":"Wall","X":47,"Y":19},{"Type":"Wall","X":48,"Y":19},{"Type":"Wall","X":49,"Y":19},{"Type":"Wall","X":50,"Y":19},{"Type":"Wall","X":51,"Y":19},{"Type":"Wall","X":52,"Y":19},{"Type":"Wall","X":53,"Y":19},{"Type":"Wall","X":56,"Y":19},{"Type":"Wall","X":57,"Y":19},{"Type":"Wall","X":58,"Y":19},{"Type":"Wall","X":59,"Y":19},{"Type":"Wall","X":0,"Y":20},{"Type":"Wall","X":1,"Y":20},{"Type":"Wall","X":5,"Y":20},{"Type":"Wall","X":10,"Y":20},{"Type":"Wall","X":14,"Y":20},{"Type":"Wall","X":15,"Y":20},{"Type":"Wall","X":16,"Y":20},{"Type":"Wall","X":17,"Y":20},{"Type":"Wall","X":18,"Y":20},{"Type":"Wall","X":21,"Y":20},{"Type":"Wall","X":22,"Y":20},{"Type":"Wall","X":23,"Y":20},{"Type":"Wall","X":24,"Y":20},{"Type":"Wall","X":25,"Y":20},{"Type":"Wall","X":28,"Y":20},{"Type":"Wall","X":29,"Y":20},{"Type":"Wall","X":30,"Y":20},{"Type":"Wall","X":43,"Y":20},{"Type":"Wall","X":44,"Y":20},{"Type":"Wall","X":45,"Y":20},{"Type":"Wall","X":46,"Y":20},{"Type":"Wall","X":47,"Y":20},{"Type":"Wall","X":48,"Y":20},{"Type":"Wall","X":49,"Y":20},{"Type":"Wall","X":50,"Y":20},{"Type":"Wall","X":51,"Y":20},{"Type":"Wall","X":52,"Y":20},{"Type":"Wall","X":53,"Y":20},{"Type":"Wall","X":56,"Y":20},{"Type":"Wall","X":57,"Y":20},{"Type":"Wall","X":58,"Y":20},{"Type":"Wall","X":59,"Y":20},{"Type":"Wall","X":0,"Y":21},{"Type":"Wall","X":1,"Y":21},{"Type":"Wall","X":2,"Y":21},{"Type":"Wall","X":14,"Y":21},{"Type":"Wall","X":15,"Y":21},{"Type":"Wall","X":16,"Y":21},{"Type":"Wall","X":17,"Y":21},{"Type":"Wall","X":18,"Y":21},{"Type":"Wall","X":21,"Y":21},{"Type":"Wall","X":22,"Y":21},{"Type":"Wall","X":23,"Y":21},{"Type":"Wall","X":24,"Y":21},{"Type":"Wall","X":38,"Y":21},{"Type":"Wall","X":39,"Y":21},{"Type":"Wall","X":43,"Y":21},{"Type":"Wall","X":44,"Y":21},{"Type":"Wall","X":45,"Y":21},{"Type":"Wall","X":46,"Y":21},{"Type":"Wall","X":47,"Y":21},{"Type":"Wall","X":48,"Y":21},{"Type":"Wall","X":49,"Y":21},{"Type":"Wall","X":50,"Y":21},{"Type":"Wall","X":51,"Y":21},{"Type":"Wall","X":52,"Y":21},{"Type":"Wall","X":55,"Y":21},{"Type":"Wall","X":56,"Y":21},{"Type":"Wall","X":57,"Y":21},{"Type":"Wall","X":58,"Y":21},{"Type":"Wall","X":59,"Y":21},{"Type":"Wall","X":0,"Y":22},{"Type":"Wall","X":1,"Y":22},{"Type":"Wall","X":2,"Y":22},{"Type":"Wall","X":14,"Y":22},{"Type":"Wall","X":15,"Y":22},{"Type":"Wall","X":16,"Y":22},{"Type":"Wall","X":17,"Y":22},{"Type":"Wall","X":20,"Y":22},{"Type":"Wall","X":21,"Y":22},{"Type":"Wall","X":22,"Y":22},{"Type":"Wall","X":23,"Y":22},{"Type":"Wall","X":24,"Y":22},{"Type":"Wall","X":37,"Y":22},{"Type":"Wall","X":38,"Y":22},{"Type":"Wall","X":39,"Y":22},{"Type":"Wall","X":40,"Y":22},{"Type":"Wall","X":44,"Y":22},{"Type":"Wall","X":45,"Y":22},{"Type":"Wall","X":46,"Y":22},{"Type":"Wall","X":47,"Y":22},{"Type":"Wall","X":48,"Y":22},{"Type":"Wall","X":49,"Y":22},{"Type":"Wall","X":50,"Y":22},{"Type":"Wall","X":51,"Y":22},{"Type":"Wall","X":54,"Y":22},{"Type":"Wall","X":55,"Y":22},{"Type":"Wall","X":56,"Y":22},{"Type":"Wall","X":57,"Y":22},{"Type":"Wall","X":58,"Y":22},{"Type":"Wall","X":59,"Y":22},{"Type":"Wall","X":0,"Y":23},{"Type":"Wall","X":1,"Y":23},{"Type":"Wall","X":2,"Y":23},{"Type":"Wall","X":15,"Y":23},{"Type":"Wall","X":16,"Y":23},{"Type":"Wall","X":20,"Y":23},{"Type":"Wall","X":21,"Y":23},{"Type":"Wall","X":22,"Y":23},{"Type":"Wall","X":23,"Y":23},{"Type":"Wall","X":37,"Y":23},{"Type":"Wall","X":38,"Y":23},{"Type":"Wall","X":39,"Y":23},{"Type":"Wall","X":40,"Y":23},{"Type":"Wall","X":41,"Y":23},{"Type":"Wall","X":46,"Y":23},{"Type":"Wall","X":47,"Y":23},{"Type":"Wall","X":48,"Y":23},{"Type":"Wall","X":49,"Y":23},{"Type":"Wall","X":50,"Y":23},{"Type":"Wall","X":54,"Y":23},{"Type":"Wall","X":55,"Y":23},{"Type":"Wall","X":56,"Y":23},{"Type":"Wall","X":57,"Y":23},{"Type":"Wall","X":58,"Y":23},{"Type":"Wall","X":59,"Y":23},{"Type":"Wall","X":0,"Y":24},{"Type":"Wall","X":1,"Y":24},{"Type":"Wall","X":19,"Y":24},{"Type":"Wall","X":20,"Y":24},{"Type":"Wall","X":21,"Y":24},{"Type":"Wall","X":22,"Y":24},{"Type":"Wall","X":23,"Y":24},{"Type":"Wall","X":30,"Y":24},{"Type":"Wall","X":31,"Y":24},{"Type":"Wall","X":38,"Y":24},{"Type":"Wall","X":39,"Y":24},{"Type":"Wall","X":40,"Y":24},{"Type":"Wall","X":41,"Y":24},{"Type":"Wall","X":42,"Y":24},{"Type":"Wall","X":43,"Y":24},{"Type":"Wall","X":55,"Y":24},{"Type":"Wall","X":56,"Y":24},{"Type":"Wall","X":57,"Y":24},{"Type":"Wall","X":58,"Y":24},{"Type":"Wall","X":59,"Y":24},{"Type":"Wall","X":0,"Y":25},{"Type":"Wall","X":6,"Y":25},{"Type":"Wall","X":19,"Y":25},{"Type":"Wall","X":20,"Y":25},{"Type":"Wall","X":21,"Y":25},{"Type":"Wall","X":22,"Y":25},{"Type":"Wall","X":29,"Y":25},{"Type":"Wall","X":30,"Y":25},{"Type":"Wall","X":31,"Y":25},{"Type":"Wall","X":32,"Y":25},{"Type":"Wall","X":39,"Y":25},{"Type":"Wall","X":40,"Y":25},{"Type":"Wall","X":41,"Y":25},{"Type":"Wall","X":42,"Y":25},{"Type":"Wall","X":43,"Y":25},{"Type":"Wall","X":44,"Y":25},{"Type":"Wall","X":45,"Y":25},{"Type":"Wall","X":58,"Y":25},{"Type":"Wall","X":59,"Y":25},{"Type":"Wall","X":0,"Y":26},{"Type":"Wall","X":6,"Y":26},{"Type":"Wall","X":20,"Y":26},{"Type":"Wall","X":21,"Y":26},{"Type":"Wall","X":28,"Y":26},{"Type":"Wall","X":29,"Y":26},{"Type":"Wall","X":30,"Y":26},{"Type":"Wall","X":31,"Y":26},{"Type":"Wall","X":32,"Y":26},{"Type":"Wall","X":39,"Y":26},{"Type":"Wall","X":40,"Y":26},{"Type":"Wall","X":41,"Y":26},{"Type":"Wall","X":42,"Y":26},{"Type":"Wall","X":43,"Y":26},{"Type":"Wall","X":44,"Y":26},{"Type":"Wall","X":45,"Y":26},{"Type":"Wall","X":46,"Y":26},{"Type":"Wall","X":47,"Y":26},{"Type":"Wall","X":48,"Y":26},{"Type":"Wall","X":49,"Y":26},{"Type":"Wall","X":50,"Y":26},{"Type":"Wall","X":51,"Y":26},{"Type":"Wall","X":59,"Y":26},{"Type":"Wall","X":0,"Y":27},{"Type":"Wall","X":1,"Y":27},{"Type":"Wall","X":27,"Y":27},{"Type":"Wall","X":28,"Y":27},{"Type":"Wall","X":29,"Y":27},{"Type":"Wall","X":30,"Y":27},{"Type":"Wall","X":31,"Y":27},{"Type":"Wall","X":32,"Y":27},{"Type":"Wall","X":33,"Y":27},{"Type":"Wall","X":40,"Y":27},{"Type":"Wall","X":41,"Y":27},{"Type":"Wall","X":44,"Y":27},{"Type":"Wall","X":45,"Y":27},{"Type":"Wall","X":46,"Y":27},{"Type":"Wall","X":47,"Y":27},{"Type":"Wall","X":48,"Y":27},{"Type":"Wall","X":49,"Y":27},{"Type":"Wall","X":50,"Y":27},{"Type":"Wall","X":51,"Y":27},{"Type":"Wall","X":52,"Y":27},{"Type":"Wall","X":59,"Y":27},{"Type":"Wall","X":0,"Y":28},{"Type":"Wall","X":1,"Y":28},{"Type":"Wall","X":2,"Y":28},{"Type":"Wall","X":10,"Y":28},{"Type":"Wall","X":11,"Y":28},{"Type":"Wall","X":16,"Y":28},{"Type":"Wall","X":17,"Y":28},{"Type":"Wall","X":26,"Y":28},{"Type":"Wall","X":27,"Y":28},{"Type":"Wall","X":28,"Y":28},{"Type":"Wall","X":29,"Y":28},{"Type":"Wall","X":30,"Y":28},{"Type":"Wall","X":31,"Y":28},{"Type":"Wall","X":32,"Y":28},{"Type":"Wall","X":33,"Y":28},{"Type":"Wall","X":34,"Y":28},{"Type":"Wall","X":45,"Y":28},{"Type":"Wall","X":46,"Y":28},{"Type":"Wall","X":47,"Y":28},{"Type":"Wall","X":48,"Y":28},{"Type":"Wall","X":49,"Y":28},{"Type":"Wall","X":50,"Y":28},{"Type":"Wall","X":51,"Y":28},{"Type":"Wall","X":52,"Y":28},{"Type":"Wall","X":58,"Y":28},{"Type":"Wall","X":59,"Y":28},{"Type":"Wall","X":0,"Y":29},{"Type":"Wall","X":1,"Y":29},{"Type":"Wall","X":2,"Y":29},{"Type":"Wall","X":3,"Y":29},{"Type":"Wall","X":10,"Y":29},{"Type":"Wall","X":11,"Y":29},{"Type":"Wall","X":12,"Y":29},{"Type":"Wall","X":15,"Y":29},{"Type":"Wall","X":16,"Y":29},{"Type":"Wall","X":17,"Y":29},{"Type":"Wall","X":18,"Y":29},{"Type":"Wall","X":19,"Y":29},{"Type":"Wall","X":26,"Y":29},{"Type":"Wall","X":27,"Y":29},{"Type":"Wall","X":28,"Y":29},{"Type":"Wall","X":29,"Y":29},{"Type":"Wall","X":30,"Y":29},{"Type":"Wall","X":31,"Y":29},{"Type":"Wall","X":32,"Y":29},{"Type":"Wall","X":33,"Y":29},{"Type":"Wall","X":34,"Y":29},{"Type":"Wall","X":46,"Y":29},{"Type":"Wall","X":47,"Y":29},{"Type":"Wall","X":48,"Y":29},{"Type":"Wall","X":49,"Y":29},{"Type":"Wall","X":50,"Y":29},{"Type":"Wall","X":51,"Y":29},{"Type":"Wall","X":52,"Y":29},{"Type":"Wall","X":57,"Y":29},{"Type":"Wall","X":58,"Y":29},{"Type":"Wall","X":59,"Y":29},{"Type":"Wall","X":0,"Y":30},{"Type":"Wall","X":1,"Y":30},{"Type":"Wall","X":2,"Y":30},{"Type":"Wall","X":3,"Y":30},{"Type":"Wall","X":4,"Y":30},{"Type":"Wall","X":10,"Y":30},{"Type":"Wall","X":11,"Y":30},{"Type":"Wall","X":15,"Y":30},{"Type":"Wall","X":16,"Y":30},{"Type":"Wall","X":17,"Y":30},{"Type":"Wall","X":18,"Y":30},{"Type":"Wall","X":19,"Y":30},{"Type":"Wall","X":20,"Y":30},{"Type":"Wall","X":27,"Y":30},{"Type":"Wall","X":28,"Y":30},{"Type":"Wall","X":29,"Y":30},{"Type":"Wall","X":30,"Y":30},{"Type":"Wall","X":31,"Y":30},{"Type":"Wall","X":32,"Y":30},{"Type":"Wall","X":33,"Y":30},{"Type":"Wall","X":34,"Y":30},{"Type":"Wall","X":38,"Y":30},{"Type":"Wall","X":39,"Y":30},{"Type":"Wall","X":40,"Y":30},{"Type":"Wall","X":46,"Y":30},{"Type":"Wall","X":47,"Y":30},{"Type":"Wall","X":48,"Y":30},{"Type":"Wall","X":49,"Y":30},{"Type":"Wall","X":50,"Y":30},{"Type":"Wall","X":51,"Y":30},{"Type":"Wall","X":52,"Y":30},{"Type":"Wall","X":53,"Y":30},{"Type":"Wall","X":56,"Y":30},{"Type":"Wall","X":57,"Y":30},{"Type":"Wall","X":58,"Y":30},{"Type":"Wall","X":59,"Y":30},{"Type":"Wall","X":0,"Y":31},{"Type":"Wall","X":1,"Y":31},{"Type":"Wall","X":2,"Y":31},{"Type":"Wall","X":3,"Y":31},{"Type":"Wall","X":4,"Y":31},{"Type":"Wall","X":16,"Y":31},{"Type":"Wall","X":17,"Y":31},{"Type":"Wall","X":18,"Y":31},{"Type":"Wall","X":19,"Y":31},{"Type":"Wall","X":20,"Y":31},{"Type":"Wall","X":23,"Y":31},{"Type":"Wall","X":24,"Y":31},{"Type":"Wall","X":29,"Y":31},{"Type":"Wall","X":30,"Y":31},{"Type":"Wall","X":31,"Y":31},{"Type":"Wall","X":39,"Y":31},{"Type":"Wall","X":46,"Y":31},{"Type":"Wall","X":47,"Y":31},{"Type":"Wall","X":48,"Y":31},{"Type":"Wall","X":49,"Y":31},{"Type":"Wall","X":50,"Y":31},{"Type":"Wall","X":51,"Y":31},{"Type":"Wall","X":52,"Y":31},{"Type":"Wall","X":53,"Y":31},{"Type":"Wall","X":54,"Y":31},{"Type":"Wall","X":55,"Y":31},{"Type":"Wall","X":56,"Y":31},{"Type":"Wall","X":57,"Y":31},{"Type":"Wall","X":58,"Y":31},{"Type":"Wall","X":59,"Y":31},{"Type":"Wall","X":0,"Y":32},{"Type":"Wall","X":1,"Y":32},{"Type":"Wall","X":2,"Y":32},{"Type":"Wall","X":3,"Y":32},{"Type":"Wall","X":4,"Y":32},{"Type":"Wall","X":18,"Y":32},{"Type":"Wall","X":19,"Y":32},{"Type":"Wall","X":22,"Y":32},{"Type":"Wall","X":23,"Y":32},{"Type":"Wall","X":24,"Y":32},{"Type":"Wall","X":25,"Y":32},{"Type":"Wall","X":45,"Y":32},{"Type":"Wall","X":46,"Y":32},{"Type":"Wall","X":47,"Y":32},{"Type":"Wall","X":48,"Y":32},{"Type":"Wall","X":49,"Y":32},{"Type":"Wall","X":50,"Y":32},{"Type":"Wall","X":51,"Y":32},{"Type":"Wall","X":52,"Y":32},{"Type":"Wall","X":53,"Y":32},{"Type":"Wall","X":54,"Y":32},{"Type":"Wall","X":55,"Y":32},{"Type":"Wall","X":56,"Y":32},{"Type":"Wall","X":57,"Y":32},{"Type":"Wall","X":58,"Y":32},{"Type":"Wall","X":59,"Y":32},{"Type":"Wall","X":0,"Y":33},{"Type":"Wall","X":1,"Y":33},{"Type":"Wall","X":2,"Y":33},{"Type":"Wall","X":3,"Y":33},{"Type":"Wall","X":9,"Y":33},{"Type":"Wall","X":10,"Y":33},{"Type":"Wall","X":11,"Y":33},{"Type":"Wall","X":12,"Y":33},{"Type":"Wall","X":22,"Y":33},{"Type":"Wall","X":23,"Y":33},{"Type":"Wall","X":24,"Y":33},{"Type":"Wall","X":25,"Y":33},{"Type":"Wall","X":44,"Y":33},{"Type":"Wall","X":45,"Y":33},{"Type":"Wall","X":46,"Y":33},{"Type":"Wall","X":47,"Y":33},{"Type":"Wall","X":48,"Y":33},{"Type":"Wall","X":49,"Y":33},{"Type":"Wall","X":50,"Y":33},{"Type":"Wall","X":51,"Y":33},{"Type":"Wall","X":52,"Y":33},{"Type":"Wall","X":53,"Y":33},{"Type":"Wall","X":54,"Y":33},{"Type":"Wall","X":55,"Y":33},{"Type":"Wall","X":56,"Y":33},{"Type":"Wall","X":57,"Y":33},{"Type":"Wall","X":58,"Y":33},{"Type":"Wall","X":59,"Y":33},{"Type":"Wall","X":0,"Y":34},{"Type":"Wall","X":1,"Y":34},{"Type":"Wall","X":2,"Y":34},{"Type":"Wall","X":3,"Y":34},{"Type":"Wall","X":8,"Y":34},{"Type":"Wall","X":9,"Y":34},{"Type":"Wall","X":10,"Y":34},{"Type":"Wall","X":11,"Y":34},{"Type":"Wall","X":12,"Y":34},{"Type":"Wall","X":22,"Y":34},{"Type":"Wall","X":23,"Y":34},{"Type":"Wall","X":24,"Y":34},{"Type":"Wall","X":43,"Y":34},{"Type":"Wall","X":44,"Y":34},{"Type":"Wall","X":45,"Y":34},{"Type":"Wall","X":46,"Y":34},{"Type":"Wall","X":49,"Y":34},{"Type":"Wall","X":50,"Y":34},{"Type":"Wall","X":51,"Y":34},{"Type":"Wall","X":52,"Y":34},{"Type":"Wall","X":53,"Y":34},{"Type":"Wall","X":54,"Y":34},{"Type":"Wall","X":57,"Y":34},{"Type":"Wall","X":58,"Y":34},{"Type":"Wall","X":59,"Y":34},{"Type":"Wall","X":0,"Y":35},{"Type":"Wall","X":1,"Y":35},{"Type":"Wall","X":2,"Y":35},{"Type":"Wall","X":3,"Y":35},{"Type":"Wall","X":4,"Y":35},{"Type":"Wall","X":7,"Y":35},{"Type":"Wall","X":8,"Y":35},{"Type":"Wall","X":9,"Y":35},{"Type":"Wall","X":10,"Y":35},{"Type":"Wall","X":11,"Y":35},{"Type":"Wall","X":12,"Y":35},{"Type":"Wall","X":22,"Y":35},{"Type":"Wall","X":23,"Y":35},{"Type":"Wall","X":43,"Y":35},{"Type":"Wall","X":44,"Y":35},{"Type":"Wall","X":45,"Y":35},{"Type":"Wall","X":50,"Y":35},{"Type":"Wall","X":51,"Y":35},{"Type":"Wall","X":52,"Y":35},{"Type":"Wall","X":53,"Y":35},{"Type":"Wall","X":58,"Y":35},{"Type":"Wall","X":59,"Y":35},{"Type":"Wall","X":0,"Y":36},{"Type":"Wall","X":1,"Y":36},{"Type":"Wall","X":2,"Y":36},{"Type":"Wall","X":3,"Y":36},{"Type":"Wall","X":4,"Y":36},{"Type":"Wall","X":5,"Y":36},{"Type":"Wall","X":6,"Y":36},{"Type":"Wall","X":7,"Y":36},{"Type":"Wall","X":8,"Y":36},{"Type":"Wall","X":9,"Y":36},{"Type":"Wall","X":10,"Y":36},{"Type":"Wall","X":11,"Y":36},{"Type":"Wall","X":43,"Y":36},{"Type":"Wall","X":44,"Y":36},{"Type":"Wall","X":45,"Y":36},{"Type":"Wall","X":50,"Y":36},{"Type":"Wall","X":51,"Y":36},{"Type":"Wall","X":52,"Y":36},{"Type":"Wall","X":53,"Y":36},{"Type":"Wall","X":58,"Y":36},{"Type":"Wall","X":59,"Y":36},{"Type":"Wall","X":0,"Y":37},{"Type":"Wall","X":1,"Y":37},{"Type":"Wall","X":2,"Y":37},{"Type":"Wall","X":3,"Y":37},{"Type":"Wall","X":4,"Y":37},{"Type":"Wall","X":5,"Y":37},{"Type":"Wall","X":6,"Y":37},{"Type":"Wall","X":7,"Y":37},{"Type":"Wall","X":8,"Y":37},{"Type":"Wall","X":9,"Y":37},{"Type":"Wall","X":10,"Y":37},{"Type":"Wall","X":11,"Y":37},{"Type":"Wall","X":16,"Y":37},{"Type":"Wall","X":17,"Y":37},{"Type":"Wall","X":18,"Y":37},{"Type":"Wall","X":24,"Y":37},{"Type":"Wall","X":25,"Y":37},{"Type":"Wall","X":26,"Y":37},{"Type":"Wall","X":31,"Y":37},{"Type":"Wall","X":32,"Y":37},{"Type":"Wall","X":33,"Y":37},{"Type":"Wall","X":34,"Y":37},{"Type":"Wall","X":42,"Y":37},{"Type":"Wall","X":43,"Y":37},{"Type":"Wall","X":44,"Y":37},{"Type":"Wall","X":45,"Y":37},{"Type":"Wall","X":46,"Y":37},{"Type":"Wall","X":49,"Y":37},{"Type":"Wall","X":50,"Y":37},{"Type":"Wall","X":51,"Y":37},{"Type":"Wall","X":52,"Y":37},{"Type":"Wall","X":53,"Y":37},{"Type":"Wall","X":54,"Y":37},{"Type":"Wall","X":57,"Y":37},{"Type":"Wall","X":58,"Y":37},{"Type":"Wall","X":59,"Y":37},{"Type":"Wall","X":0,"Y":38},{"Type":"Wall","X":1,"Y":38},{"Type":"Wall","X":2,"Y":38},{"Type":"Wall","X":3,"Y":38},{"Type":"Wall","X":4,"Y":38},{"Type":"Wall","X":5,"Y":38},{"Type":"Wall","X":6,"Y":38},{"Type":"Wall","X":7,"Y":38},{"Type":"Wall","X":8,"Y":38},{"Type":"Wall","X":9,"Y":38},{"Type":"Wall","X":10,"Y":38},{"Type":"Wall","X":11,"Y":38},{"Type":"Wall","X":12,"Y":38},{"Type":"Wall","X":13,"Y":38},{"Type":"Wall","X":14,"Y":38},{"Type":"Wall","X":15,"Y":38},{"Type":"Wall","X":16,"Y":38},{"Type":"Wall","X":17,"Y":38},{"Type":"Wall","X":18,"Y":38},{"Type":"Wall","X":19,"Y":38},{"Type":"Wall","X":20,"Y":38},{"Type":"Wall","X":23,"Y":38},{"Type":"Wall","X":24,"Y":38},{"Type":"Wall","X":25,"Y":38},{"Type":"Wall","X":26,"Y":38},{"Type":"Wall","X":27,"Y":38},{"Type":"Wall","X":28,"Y":38},{"Type":"Wall","X":29,"Y":38},{"Type":"Wall","X":30,"Y":38},{"Type":"Wall","X":31,"Y":38},{"Type":"Wall","X":32,"Y":38},{"Type":"Wall","X":33,"Y":38},{"Type":"Wall","X":34,"Y":38},{"Type":"Wall","X":35,"Y":38},{"Type":"Wall","X":36,"Y":38},{"Type":"Wall","X":37,"Y":38},{"Type":"Wall","X":40,"Y":38},{"Type":"Wall","X":41,"Y":38},{"Type":"Wall","X":42,"Y":38},{"Type":"Wall","X":43,"Y":38},{"Type":"Wall","X":44,"Y":38},{"Type":"Wall","X":45,"Y":38},{"Type":"Wall","X":46,"Y":38},{"Type":"Wall","X":47,"Y":38},{"Type":"Wall","X":48,"Y":38},{"Type":"Wall","X":49,"Y":38},{"Type":"Wall","X":50,"Y":38},{"Type":"Wall","X":51,"Y":38},{"Type":"Wall","X":52,"Y":38},{"Type":"Wall","X":53,"Y":38},{"Type":"Wall","X":54,"Y":38},{"Type":"Wall","X":55,"Y":38},{"Type":"Wall","X":56,"Y":38},{"Type":"Wall","X":57,"Y":38},{"Type":"Wall","X":58,"Y":38},{"Type":"Wall","X":59,"Y":38},{"Type":"Wall","X":0,"Y":39},{"Type":"Wall","X":1,"Y":39},{"Type":"Wall","X":2,"Y":39},{"Type":"Wall","X":3,"Y":39},{"Type":"Wall","X":4,"Y":39},{"Type":"Wall","X":5,"Y":39},{"Type":"Wall","X":6,"Y":39},{"Type":"Wall","X":7,"Y":39},{"Type":"Wall","X":8,"Y":39},{"Type":"Wall","X":9,"Y":39},{"Type":"Wall","X":10,"Y":39},{"Type":"Wall","X":11,"Y":39},{"Type":"Wall","X":12,"Y":39},{"Type":"Wall","X":13,"Y":39},{"Type":"Wall","X":14,"Y":39},{"Type":"Wall","X":15,"Y":39},{"Type":"Wall","X":16,"Y":39},{"Type":"Wall","X":17,"Y":39},{"Type":"Wall","X":18,"Y":39},{"Type":"Wall","X":19,"Y":39},{"Type":"Wall","X":20,"Y":39},{"Type":"Wall","X":21,"Y":39},{"Type":"Wall","X":22,"Y":39},{"Type":"Wall","X":23,"Y":39},{"Type":"Wall","X":24,"Y":39},{"Type":"Wall","X":25,"Y":39},{"Type":"Wall","X":26,"Y":39},{"Type":"Wall","X":27,"Y":39},{"Type":"Wall","X":28,"Y":39},{"Type":"Wall","X":29,"Y":39},{"Type":"Wall","X":30,"Y":39},{"Type":"Wall","X":31,"Y":39},{"Type":"Wall","X":32,"Y":39},{"Type":"Wall","X":33,"Y":39},{"Type":"Wall","X":34,"Y":39},{"Type":"Wall","X":35,"Y":39},{"Type":"Wall","X":36,"Y":39},{"Type":"Wall","X":37,"Y":39},{"Type":"Wall","X":38,"Y":39},{"Type":"Wall","X":39,"Y":39},{"Type":"Wall","X":40,"Y":39},{"Type":"Wall","X":41,"Y":39},{"Type":"Wall","X":42,"Y":39},{"Type":"Wall","X":43,"Y":39},{"Type":"Wall","X":44,"Y":39},{"Type":"Wall","X":45,"Y":39},{"Type":"Wall","X":46,"Y":39},{"Type":"Wall","X":47,"Y":39},{"Type":"Wall","X":48,"Y":39},{"Type":"Wall","X":49,"Y":39},{"Type":"Wall","X":50,"Y":39},{"Type":"Wall","X":51,"Y":39},{"Type":"Wall","X":52,"Y":39},{"Type":"Wall","X":53,"Y":39},{"Type":"Wall","X":54,"Y":39},{"Type":"Wall","X":55,"Y":39},{"Type":"Wall","X":56,"Y":39},{"Type":"Wall","X":57,"Y":39},{"Type":"Wall","X":58,"Y":39},{"Type":"Wall","X":59,"Y":39}]}'
        //String mapData = rest.get("http://192.168.0.172/Mapster/api/map?mapWidth=${width}&height=${height}&startingPoints=${playerCount")
        JSONObject mapObject = new JSONObject(mapData)
        JSONArray tilesJSON = mapObject.getJSONArray("tiles")
        JSONArray startingPoints = mapObject.getJSONArray("startingPoints")

        GameMap map = new GameMap()
        map.startingPositions = new Vector2d[playerCount]

        List<Tile> tileArray = new ArrayList<>()
        for (int i = 0; i < tilesJSON.length(); i++) {
            JSONObject tileJSON = tilesJSON.getJSONObject(i)
            Tile tile = new Tile(tileJSON)
            tileArray.add(tile)
        }

        map.tileModels = tileArray
        map.gameArea = [tileArray.last().X+1, tileArray.last().Y+1]

        JSONObject tilesObject = new JSONObject()
        tilesObject.put("tiles", tilesJSON)
        tilesObject.put("environment", environment.toString().toLowerCase())
        map.tiles = tilesObject.toString() // Save as JSON String since we don't need it in model format in game-console

        for (int i = 0; i < playerCount; i++) {
            Vector2d startingPos = new Vector2d()
            startingPos.x = 10
            startingPos.y = 12 + i * 3
            map.startingPositions[i] = startingPos
//            JSONObject point = startingPoints.getJSONObject(i)
//            Vector2d startingPos = new Vector2d()
//            startingPos.x = point.getInt("X")
//            startingPos.y = point.getInt("Y")
//            map.startingPositions[i] = startingPos
        }

        return map
    }
}
