import {ElementCreature} from "../creatures/creature.js";
import {ElementTower, ElementTowerName} from "./tower.js";
import {AnimationAttackArrow} from "../../animations/attack/animation.attack.arrow.js";
import {spriteTowerArrow} from "../../assets/sprites/tower/sprite.tower.arrow.js";
import {Sprite} from "../../assets/sprites/sprite.js";
import {UpgradeDamage} from "./upgrades/upgrade.damage.js";
import {UpgradeAttackSpeed} from "./upgrades/upgrade.attackSpeed.js";

export class ElementTowerArrow extends ElementTower {
    public name: ElementTowerName = 'arrow'

    protected sprite: Sprite = spriteTowerArrow

    public price = 100

    public damage = 1

    public range = 2

    public attackSpeed = 1

    public attackAnimation = new AnimationAttackArrow()

    public availableUpgrades = [new UpgradeDamage(), new UpgradeAttackSpeed()]

    public doAttack(creatures: ElementCreature[]) {
        const creaturesInRange = this.getCreaturesInRange(creatures)

        // Nothing in range so we don't attack
        if (!creaturesInRange.length) {
            return false
        }

        const [firstCreature] = creaturesInRange

        this.doAttackAnimation(firstCreature.canvasPosition)

        firstCreature.takeDamage(this.damage)

        return true
    }
}