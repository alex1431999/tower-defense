import {ElementTower} from "../tower.js"

export type UpgradeName = 'damage' | 'attackSpeed' | 'fire'

export abstract class Upgrade {
    public abstract name: UpgradeName

    public abstract upgrade(tower: ElementTower): void

    public abstract getPrice(tower: ElementTower): number

    public timesUpgraded = 0
}