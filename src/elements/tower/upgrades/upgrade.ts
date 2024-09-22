import {ElementTower} from "../tower"

export type UpgradeName = 'damage' | 'attackSpeed'

export abstract class Upgrade {
    public abstract name: UpgradeName

    public abstract upgrade(tower: ElementTower): void

    public abstract getPrice(tower: ElementTower): number

    public timesUpgraded = 0
}