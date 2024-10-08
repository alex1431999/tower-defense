import {AnimationAttack} from "../../animations/attack/animation.attack.js";
import {Sprite} from "../../assets/sprites/sprite.js";
import {ElementCreature} from "../creatures/creature.js";
import {ElementTower, ElementTowerName} from "./tower.js";
import {spriteTowerRocks} from "../../assets/sprites/tower/sprite.tower.rocks.js";
import {AnimationAttackRocks} from "../../animations/attack/animation.attack.rocks.js";
import {ElementCanvasPosition} from "../element.js";
import {copy} from "../../helper/util.js";
import {UpgradeDamage} from "./upgrades/upgrade.damage.js";

export class ElementTowerRocks extends ElementTower {
    public name: ElementTowerName = 'rocks'

    protected sprite: Sprite = spriteTowerRocks

    public price: number = 150

    public damage: number = 0.5

    public range: number = 1

    public attackSpeed: number = 0.25

    public attackAnimation: AnimationAttack = new AnimationAttackRocks()

    public availableUpgrades = [new UpgradeDamage()]

    protected doAttack(creatures: ElementCreature[]): boolean {
        const creaturesInRange = this.getCreaturesInRange(creatures)

        // Nothing in range so we don't attack
        if (!creaturesInRange.length) {
            return false
        }

        creaturesInRange.forEach(creature => {
            this.doAttackAnimation(creature.canvasPosition)
            creature.takeDamage(this.damage)
        })

        return true
    }

    protected doAttackAnimation(targetPosition: ElementCanvasPosition) {
        const attackAnimation = new AnimationAttackRocks()
        attackAnimation.start(copy(this.position), targetPosition)
    }
}