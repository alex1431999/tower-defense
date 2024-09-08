import {MapLayout} from "./maps.types.js";
import {GameMap} from "./map.js";

export class MapFirst extends GameMap {
    public layout: MapLayout = [
        ['pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
        ['pa', 'pa', 'pa', 'pa', 'pa', 'pl'],
        ['pl', 'pl', 'pl', 'pl', 'pa', 'pl'],
        ['pl', 'pl', 'pa', 'pa', 'pa', 'pl'],
        ['pl', 'pl', 'pa', 'pl', 'pl', 'pl'],
        ['pl', 'pl', 'pa', 'pa', 'pa', 'pl'],
        ['pl', 'pl', 'pl', 'pl', 'pa', 'pl'],
        ['pl', 'pl', 'pl', 'pl', 'pa', 'pl'],
    ]
}