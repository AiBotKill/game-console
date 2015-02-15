package botkill.gameconsole

import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.services.ServiceUnitTestMixin} for usage instructions
 */
@TestFor(MapService)
class MapServiceSpec extends Specification {

    def mapService = new MapService()

    def setup() {
    }

    def cleanup() {
    }

    void "test map generation"() {
        GameMap map = mapService.getMap(3)
        expect: map.gameArea[0] == 80
        and: map.startingPositions.length == 3
    }
}
