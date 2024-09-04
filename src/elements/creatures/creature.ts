import {GameElement} from "../element.js";

export type CreaturePosition = { x: number, y: number }

export class ElementCreature extends GameElement {
    public position: CreaturePosition = {x: 0, y: 0}
}