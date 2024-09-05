import {ElementConfig, ElementPosition, GameElement} from "../element.js";
import {ElementTile} from "../tiles/element.tile.js";
import {ElementCreature} from "../creatures/creature.js";

export abstract class ElementTower extends GameElement {
    public abstract damage: number

    // Any field that is within this range can be attacked by this tower
    public abstract range: number

    public height: number = 25

    public width: number = 25

    constructor(config: ElementConfig) {
        super(config)
    }

    public abstract attack(creatures: ElementCreature[]): void

    /**
     * By default, center all towers in the middle of the tile
     */
    public get canvasPosition(): ElementPosition {
        const position = super.canvasPosition

        position.x += (ElementTile.WIDTH - this.width) / 2
        position.y += (ElementTile.HEIGHT - this.height) / 2

        return position
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