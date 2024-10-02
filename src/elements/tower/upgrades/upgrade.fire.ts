import {ElementTower} from "../tower.js";
import {Upgrade, UpgradeName} from "./upgrade.js";

export class UpgradeFire extends Upgrade {
    public name: UpgradeName = 'fire'

    public upgrade(tower: ElementTower) {
        tower.elementalDamage.fire += 1
        this.timesUpgraded += 1
    }

    public getPrice(tower: ElementTower) {
        const basePrice = 80
        return basePrice * (this.timesUpgraded + 1)
    }
}