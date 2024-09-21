import {ElementConfig, ElementPosition, GameElement} from "../element.js";
import {ElementCreature} from "../creatures/creature.js";
import {AnimationAttack} from "../../animations/attack/animation.attack.js";
import {CanvasPosition} from "../../canvas.js";
import {centerPositionInTile} from "../../helper/canvas.js";
import {Sprite} from "../../assets/sprites/sprite.js";
import {FRAMES_PER_SECOND} from "../../renderer.constants.js";
import {copy} from "../../helper/util.js";

export type ElementTowerName = 'arrow' | 'rocks'

export abstract class ElementTower extends GameElement {
    public abstract name: ElementTowerName

    protected abstract sprite: Sprite

    public abstract price: number

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

    constructor(config?: ElementConfig) {
        super(config)
    }

    public get attackSpeedNoramlised() {
        return 1 / this.attackSpeed * FRAMES_PER_SECOND
    }


    public draw() {
        this.context.drawImage(this.sprite.image, this.canvasPosition.x, this.canvasPosition.y)
    }

    public attack(creatures: ElementCreature[]): void {
        this.cooldown -= 1

        if (this.cooldown <= 0) {
            const hasAttacked = this.doAttack(creatures)
            if (hasAttacked) {
                this.cooldown = this.attackSpeedNoramlised
            }
        }
    }

    protected abstract doAttack(creatures: ElementCreature[]): boolean

    protected doAttackAnimation(targetPosition: ElementPosition) {
        this.attackAnimation.start(copy(this.position), targetPosition)
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

            return xDifference <= this.range && yDifference <= this.range
        })
    }
}