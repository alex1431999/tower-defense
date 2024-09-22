import {Wave, WaveConfig} from "../../wave.js";
import {ElementCreature} from "../../../elements/creatures/creature.js";
import {ElementCreatureNali} from "../../../elements/creatures/creature.nali.js";
import {ElementCreatureRunner} from "../../../elements/creatures/creature.runner.js";

export class WaveFirst5 extends Wave {

    public creaturesRemaining: ElementCreature[]

    constructor(config: WaveConfig) {
        super(config);
        this.creaturesRemaining = [...this.creatures]
    }


    get creatures(): ElementCreature[] {
        return [
            new ElementCreatureNali({position: this.config.creatureStartingPosition}),
            new ElementCreatureRunner({position: this.config.creatureStartingPosition}),
            new ElementCreatureNali({position: this.config.creatureStartingPosition}),
            new ElementCreatureRunner({position: this.config.creatureStartingPosition}),
            new ElementCreatureNali({position: this.config.creatureStartingPosition}),
            new ElementCreatureRunner({position: this.config.creatureStartingPosition}),
            new ElementCreatureNali({position: this.config.creatureStartingPosition}),
            new ElementCreatureRunner({position: this.config.creatureStartingPosition}),
            new ElementCreatureNali({position: this.config.creatureStartingPosition}),
            new ElementCreatureRunner({position: this.config.creatureStartingPosition}),
            new ElementCreatureNali({position: this.config.creatureStartingPosition}),
            new ElementCreatureRunner({position: this.config.creatureStartingPosition}),
        ]
    }
}