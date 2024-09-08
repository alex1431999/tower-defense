import {MapLayout} from "./maps.types.js";
import {GameMap} from "./map.js";
import {Wave} from "../waves/wave";
import {WaveFirst1} from "../waves/maps/first/wave.first.1";

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

    public get waves(): Wave[] {
        return [new WaveFirst1(this.config)]
    }
}