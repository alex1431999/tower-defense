import {MapLayout} from "./maps.types.js";
import {Wave} from "../waves/wave";
import {ElementCreature} from "../elements/creatures/creature.js";

export type GameMapConfig = {
    onDeployCreature: (creature: ElementCreature) => void
}

export abstract class GameMap {
    public abstract layout: MapLayout

    public abstract get waves(): Wave[]

    public waveCount = 0

    public config: GameMapConfig

    constructor(config: GameMapConfig) {
        this.config = config
    }

    public start() {
        this.waveCount = 0
    }

    public get wave() {
        return this.waves[this.waveCount]
    }

    public get finished() {
        return this.waveCount >= this.waves.length
    }
}