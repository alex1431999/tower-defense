import {ElementTower} from "../tower.js";
import {Upgrade, UpgradeName} from "./upgrade.js";

export class UpgradeAttackSpeed extends Upgrade {
    public name: UpgradeName = 'attackSpeed'

    public upgrade(tower: ElementTower) {
        tower.attackSpeed += 0.2
        this.timesUpgraded += 1
    }

    public getPrice(tower: ElementTower) {
        const basePrice = 20
        return basePrice * (this.timesUpgraded + 1)
    }
}