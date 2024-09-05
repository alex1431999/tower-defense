import {ElementCreature} from "../creatures/creature.js";
import {ElementTower} from "./tower.js";

export class ElementTowerArrow extends ElementTower {
    public damage = 1

    public range = 2

    public attack(creatures: ElementCreature[]) {
        const creaturesInRange = this.getCreaturesInRange(creatures)

        // Nothing in range so we don't attack
        if (!creaturesInRange.length) {
            return
        }

        const [firstCreature] = creaturesInRange

        firstCreature.takeDamage(this.damage)
    }

    public draw(frameCount: number) {
        super.draw(frameCount);

        this.context.fillStyle = 'red'
        this.context.fillRect(this.canvasPosition.x, this.canvasPosition.y, this.width, this.height)
    }
}