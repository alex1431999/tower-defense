import {Wave, WaveConfig} from "../../wave.js";
import {ElementCreature} from "../../../elements/creatures/creature.js";
import {ElementCreatureNali} from "../../../elements/creatures/creature.nali.js";

export class WaveFirst1 extends Wave {
    public creatures: ElementCreature[] = [new ElementCreatureNali()]

    public creaturesRemaining: ElementCreature[]

    constructor(config: WaveConfig) {
        super(config);
        this.creaturesRemaining = [...this.creatures]
    }
}