import {spriteCobblestone} from "./sprite.cobblestone.js";
import {Sprite} from "./sprite.js";
import {spriteGrass} from "./sprite.grass.js";
import {spriteTowerArrow} from "./tower/sprite.tower.arrow.js";
import {spriteTowerArrowAttack} from "./tower/attack/sprite.tower.arrow.attack.js";
import {spriteTowerRocks} from "./tower/sprite.tower.rocks.js";
import {spriteTowerRocksAttack} from "./tower/attack/sprite.tower.rocks.attack.js";

export const ALL_SPRITES: Sprite[] = [spriteCobblestone, spriteGrass, spriteTowerArrow, spriteTowerArrowAttack, spriteTowerRocks, spriteTowerRocksAttack]