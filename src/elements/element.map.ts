import {GameElement} from "./element.js";
import {ElementTilePath} from "./tiles/element.tile.path.js";

export class ElementMap extends GameElement {
    public elements: GameElement[] = [new ElementTilePath()]
}