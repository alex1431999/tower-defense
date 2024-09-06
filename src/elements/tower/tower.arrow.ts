import {ElementCreature} from "../creatures/creature.js";
import {ElementTower} from "./tower.js";
import {AnimationAttackArrow} from "../../animations/attack/animation.attack.arrow.js";

export class ElementTowerArrow extends ElementTower {
    public damage = 1

    public range = 2

    public attackSpeed = 2

    public attackAnimation = new AnimationAttackArrow()

    public doAttack(creatures: ElementCreature[]) {
        const creaturesInRange = this.getCreaturesInRange(creatures)

        // Nothing in range so we don't attack
        if (!creaturesInRange.length) {
            return false
        }

        const [firstCreature] = creaturesInRange

        this.doAttackAnimation(firstCreature.position)

        firstCreature.takeDamage(this.damage)

        return true
    }

    public draw(frameCount: number) {
        super.draw(frameCount);

        this.context.fillStyle = 'red'
        this.context.fillRect(this.canvasPosition.x, this.canvasPosition.y, this.width, this.height)
    }
}