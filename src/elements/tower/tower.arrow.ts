import {ElementCreature} from "../creatures/creature.js";
import {ElementTower, ElementTowerName} from "./tower.js";
import {AnimationAttackArrow} from "../../animations/attack/animation.attack.arrow.js";
import {spriteTowerArrow} from "../../assets/sprites/tower/sprite.tower.arrow.js";
import {Sprite} from "../../assets/sprites/sprite.js";

export class ElementTowerArrow extends ElementTower {
    public name: ElementTowerName = 'arrow'

    protected sprite: Sprite = spriteTowerArrow

    public price = 100

    public damage = 1

    public range = 3

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
}