import {Wave} from "../../wave.js";
import {ElementCreature} from "../../../elements/creatures/creature";
import {ElementCreatureNali} from "../../../elements/creatures/creature.nali";

export class WaveFirst1 extends Wave {
    public creatures: ElementCreature[] = [new ElementCreatureNali()]
}