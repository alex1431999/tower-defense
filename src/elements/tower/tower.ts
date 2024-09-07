import {ElementConfig, ElementPosition, GameElement} from "../element.js";
import {ElementCreature} from "../creatures/creature.js";
import {AnimationAttack} from "../../animations/attack/animation.attack.js";
import {CanvasPosition} from "../../canvas.js";
import {centerPositionInTile} from "../../helper/canvas.js";

export abstract class ElementTower extends GameElement {
    public abstract damage: number

    // Any field that is within this range can be attacked by this tower
    public abstract range: number

    // Defines how often a tower can attack, they can attack every X frame
    public abstract attackSpeed: number

    // The attack animation the tower does
    public abstract attackAnimation: AnimationAttack

    public cooldown: number = 0

    public height: number = 25

    public width: number = 25

    constructor(config: ElementConfig) {
        super(config)
    }

    public attack(creatures: ElementCreature[]): void {
        this.cooldown -= 1

        if (this.cooldown <= 0) {
            const hasAttacked = this.doAttack(creatures)
            if (hasAttacked) {
                this.cooldown = this.attackSpeed
            }
        }
    }

    protected abstract doAttack(creatures: ElementCreature[]): boolean

    protected doAttackAnimation(targetPosition: ElementPosition) {
        this.attackAnimation.start(this.position, targetPosition)
    }


    /**
     * By default, center all towers in the middle of the tile
     */
    public get canvasPosition(): CanvasPosition {
        const position = super.canvasPosition
        return centerPositionInTile(position, this.width, this.height)
    }

    protected getCreaturesInRange(creatures: ElementCreature[]): ElementCreature[] {
        return creatures.filter(creature => {
            const xDifference = Math.abs(creature.position.x - this.position.x)
            const yDifference = Math.abs(creature.position.y - this.position.y)
            const distance = xDifference + yDifference

            return distance <= this.range
        })
    }
}