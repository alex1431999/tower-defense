import {ElementCreature} from "./creature.js";

export class ElementCreatureNali extends ElementCreature {
    public healthPoints: number = 10

    public maxHealthPoints: number = 10

    public currencyReward: number = 25

    public draw(frameCount: number) {
        super.draw(frameCount);

        this.context.fillStyle = 'brown'
        this.context.fillRect(this.canvasPosition.x, this.canvasPosition.y, this.width, this.height)
    }
}