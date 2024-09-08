import {MapLayout} from "./maps.types.js";
import {Wave} from "../waves/wave";
import {ElementCreature} from "../elements/creatures/creature.js";

export type GameMapConfig = {
    onDeployCreature: (creature: ElementCreature) => void
}

export abstract class GameMap {
    public abstract layout: MapLayout

    public abstract get waves(): Wave[]

    public config: GameMapConfig

    constructor(config: GameMapConfig) {
        this.config = config
    }
}