import {MapLayout} from "./maps.types.js";
import {GameMap, GameMapConfig} from "./map.js";
import {Wave} from "../waves/wave.js";
import {WaveFirst1} from "../waves/maps/first/wave.first.1.js";
import {WaveFirst2} from "../waves/maps/first/wave.first.2.js";
import {WaveFirst3} from "../waves/maps/first/wave.first.3.js";

export class MapFirst extends GameMap {
    public layout: MapLayout = [
        ['pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
        ['pa', 'pa', 'pa', 'pa', 'pa', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
        ['pl', 'pl', 'pl', 'pl', 'pa', 'pl', 'pa', 'pa', 'pa', 'pa', 'pa', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
        ['pl', 'pl', 'pa', 'pa', 'pa', 'pl', 'pa', 'pl', 'pl', 'pl', 'pa', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
        ['pl', 'pl', 'pa', 'pl', 'pl', 'pl', 'pa', 'pa', 'pa', 'pl', 'pa', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
        ['pl', 'pl', 'pa', 'pa', 'pa', 'pl', 'pl', 'pl', 'pa', 'pl', 'pa', 'pl', 'pl', 'pl', 'pl', 'pl', 'pa', 'pa', 'pa', 'pa', 'pa', 'pa', 'pa', 'pa', 'pa', 'pa'],
        ['pl', 'pl', 'pl', 'pl', 'pa', 'pa', 'pa', 'pl', 'pa', 'pl', 'pa', 'pa', 'pl', 'pl', 'pl', 'pl', 'pa', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
        ['pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pa', 'pl', 'pa', 'pl', 'pl', 'pa', 'pl', 'pl', 'pa', 'pa', 'pa', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
        ['pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pa', 'pl', 'pa', 'pl', 'pa', 'pa', 'pl', 'pl', 'pa', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
        ['pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pa', 'pa', 'pa', 'pl', 'pa', 'pl', 'pl', 'pl', 'pa', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
        ['pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pa', 'pa', 'pa', 'pl', 'pa', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
        ['pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pa', 'pl', 'pa', 'pa', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
        ['pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pa', 'pl', 'pl', 'pa', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
        ['pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pa', 'pl', 'pl', 'pa', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
        ['pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pa', 'pa', 'pa', 'pa', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
    ]

    public waves: Wave[]

    constructor(config: GameMapConfig) {
        super(config);
        this.waves = [new WaveFirst1(this.config), new WaveFirst2(this.config), new WaveFirst3(this.config)]
    }
}