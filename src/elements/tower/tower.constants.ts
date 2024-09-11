import {ElementTowerArrow} from "./tower.arrow.js";
import {ElementTower, ElementTowerName} from "./tower.js";


export const ALL_TOWERS_MAP: Record<ElementTowerName, ElementTower> = {
    arrow: new ElementTowerArrow()
}

export const ALL_TOWERS = Object.values(ALL_TOWERS_MAP)