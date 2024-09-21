import {ElementTowerArrow} from "./tower.arrow.js";
import {ElementTower, ElementTowerName} from "./tower.js";
import {ElementTowerRocks} from "./tower.rocks.js";


export const ALL_TOWERS_MAP: Record<ElementTowerName, ElementTower> = {
    arrow: new ElementTowerArrow(),
    rocks: new ElementTowerRocks(),
}

export const ALL_TOWERS = Object.values(ALL_TOWERS_MAP)

export const ALL_TOWER_CLASSES_MAP = {
    arrow: ElementTowerArrow,
    rocks: ElementTowerRocks
}

export const ALL_TOWER_CLASSES = Object.values(ALL_TOWER_CLASSES_MAP)