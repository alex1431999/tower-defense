import {ElementCreature} from "./creature.js";
import {ElementTile} from "../tiles/element.tile.js";

export class ElementCreatureNali extends ElementCreature {

    public static WIDTH = Math.ceil(ElementTile.WIDTH / 2)

    public static HEIGHT = Math.ceil(ElementTile.HEIGHT / 2)

    public draw() {
        super.draw();


        this.context.fillStyle = 'brown'
        this.context.fillRect(this.position.x, this.position.y, ElementCreatureNali.WIDTH, ElementCreatureNali.HEIGHT)
    }
}