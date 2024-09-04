import {ElementCreature} from "./creature.js";
import {ElementTile} from "../tiles/element.tile.js";

export class ElementCreatureNali extends ElementCreature {
    public static WIDTH = Math.ceil(ElementTile.WIDTH / 2)

    public static HEIGHT = Math.ceil(ElementTile.HEIGHT / 2)

    public draw(frameCount: number) {
        super.draw(frameCount);

        console.log(this.canvasPosition)

        this.context.fillStyle = 'brown'
        this.context.fillRect(this.canvasPosition.x, this.canvasPosition.y, ElementCreatureNali.WIDTH, ElementCreatureNali.HEIGHT)
    }
}