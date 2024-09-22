import {ElementCreature} from "./creature.js";

export class ElementCreatureRunner extends ElementCreature {
    public healthPoints: number = 5

    public maxHealthPoints: number = 5

    public currencyReward: number = 10

    public speed = 2

    public draw(frameCount: number) {
        super.draw(frameCount);

        this.context.fillStyle = 'green'
        this.context.fillRect(this.canvasPosition.x, this.canvasPosition.y, this.width, this.height)
    }
}