import {GameElement} from "../element.js";

export abstract class Tower extends GameElement {
    public abstract damage: number

    // Any field that is within this range can be attacked by this tower
    public abstract range: number

    public height: number = 25

    public width: number = 25
}