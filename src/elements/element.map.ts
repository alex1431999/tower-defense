import {GameElement} from "./element.js";
import {ElementTile} from "./tiles/element.tile.js";

export class ElementMap extends GameElement {
    public elements: GameElement[] = [new ElementTile()]
}