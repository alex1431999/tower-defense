import {ElementCreature} from "./creature.js";

export class ElementCreatureNali extends ElementCreature {
    public draw(frameCount: number) {
        super.draw(frameCount);

        this.context.fillStyle = 'brown'
        this.context.fillRect(this.canvasPosition.x, this.canvasPosition.y, this.width, this.height)
    }
}