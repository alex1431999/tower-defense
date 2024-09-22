import {ElementTower} from "../tower"

export type UpgradeName = 'damage'

export abstract class Upgrade {
    public abstract name: UpgradeName

    public abstract upgrade(tower: ElementTower): void

    public abstract getPrice(tower: ElementTower): void

    public timesUpgraded = 0
}