import {AnimationAttack} from "../../animations/attack/animation.attack.js";
import {Sprite} from "../../assets/sprites/sprite.js";
import {ElementCreature} from "../creatures/creature.js";
import {ElementTower, ElementTowerName} from "./tower.js";
import {spriteTowerRocks} from "../../assets/sprites/tower/sprite.tower.rocks.js";
import {AnimationAttackRocks} from "../../animations/attack/animation.attack.rocks.js";

export class ElementTowerRocks extends ElementTower {
    public name: ElementTowerName = 'rocks'

    protected sprite: Sprite = spriteTowerRocks

    public price: number = 150

    public damage: number = 0.5

    public range: number = 1

    public attackSpeed: number = 1

    public attackAnimation: AnimationAttack = new AnimationAttackRocks()

    protected doAttack(creatures: ElementCreature[]): boolean {
        throw new Error("Method not implemented.");
    }

}