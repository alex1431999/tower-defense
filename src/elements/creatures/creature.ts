import {ElementConfig, ElementPosition, GameElement} from "../element.js";
import {MapLayout} from "../../maps/maps.types";
import {TileIdentifier} from "../tiles/element.tile.js";
import {TILE_HEIGHT, TILE_WIDTH} from "../../helper/canvas.constants.js";
import {GameMap} from "../../maps/map.js";
import {FRAMES_PER_SECOND} from "../../renderer.constants.js";
import {positionToCanvasPosition} from "../../helper/canvas.js";

export abstract class ElementCreature extends GameElement {
    public abstract healthPoints: number

    public abstract maxHealthPoints: number

    public speed: number = 1

    public currencyReward: number

    public positionPrevious: ElementPosition

    public width = 25

    public height = 25

    protected movingStep = 0

    constructor(config?: ElementConfig) {
        super(config);
        this.positionPrevious = this.position
    }

    public draw(frameCount: number) {
        this.movingStep += 1

        if (this.movingStep % this.speedNoramlised === 0) {
            this.movingStep = 0
        }

        this.drawHealthBar()
    }

    /**
     * This is a value you can use to catch the right framerate at which the creature should move
     */
    public get speedNoramlised() {
        // This allows us to make bigger speed numbers to mean that we want the move to happen on more frames
        const speedInverted = 1 / this.speed

        // We have to apply the frames per second to make sure the creature moves at the same speed independent of
        // refresh rate
        return speedInverted * FRAMES_PER_SECOND
    }

    public move(position: ElementPosition) {
        this.positionPrevious = this.position
        this.position = position
    }

    /**
     *  If this function returns null we know we have reached the end of the the map
     */
    public getNextPosition(map: GameMap): ElementPosition | null {
        const mapLayout = map.layout
        const {x, y} = this.position

        const currentTile = mapLayout[y][x]
        if (currentTile === undefined) {
            throw new Error(`Creature is outside of the map at position: ${JSON.stringify(this.position)}`)
        }

        if (this.canMoveToTile(mapLayout, x + 1, y)) {
            return {x: x + 1, y}
        } else if (this.canMoveToTile(mapLayout, x - 1, y)) {
            return {x: x - 1, y}
        } else if (this.canMoveToTile(mapLayout, x, y + 1)) {
            return {x, y: y + 1}
        } else if (this.canMoveToTile(mapLayout, x, y - 1)) {
            return {x, y: y - 1}
        } else {
            return null
        }
    }

    public takeDamage(amount: number) {
        this.healthPoints -= amount
    }

    /**
     * By default, center all creatures in the middle of the tile
     */
    public get canvasPosition(): ElementPosition {
        const positionCentered = positionToCanvasPosition(this.positionPrevious)
        const nextPositionCentered = positionToCanvasPosition(this.position)

        positionCentered.x += (TILE_WIDTH - this.width) / 2
        positionCentered.y += (TILE_HEIGHT - this.height) / 2

        nextPositionCentered.x += (TILE_WIDTH - this.width) / 2
        nextPositionCentered.y += (TILE_HEIGHT - this.height) / 2


        const allSteps = this.speedNoramlised

        const xDifference = positionCentered.x - nextPositionCentered.x
        const yDifference = positionCentered.y - nextPositionCentered.y

        const xStep = xDifference !== 0 ? xDifference / allSteps : 0
        const yStep = yDifference !== 0 ? yDifference / allSteps : 0

        const finalPosition: ElementPosition = {
            x: positionCentered.x - (this.movingStep * xStep),
            y: positionCentered.y - (this.movingStep * yStep)
        }

        return finalPosition
    }

    private canMoveToTile(mapLayout: MapLayout, x: number, y: number): boolean {
        const tileIdentifier = this.getTileAt(mapLayout, x, y)

        // Out of the map
        if (tileIdentifier === null) {
            return false
        }

        // Not a path file
        if (tileIdentifier !== 'pa') {
            return false
        }

        // We were there last turn
        if (x === this.positionPrevious.x && y === this.positionPrevious.y) {
            return false
        }

        return true
    }

    private getTileAt(mapLayout: MapLayout, x: number, y: number): TileIdentifier | null {
        if (mapLayout.length - 1 < y) {
            return null
        }

        const row = mapLayout[y]

        if (row.length - 1 < x) {
            return null
        }

        return row[x]
    }

    private drawHealthBar() {
        const Y_OFFSET = 3

        const availableSpace = this.width
        const healthPointsRemaining = this.healthPoints / this.maxHealthPoints
        const healthBarSize = availableSpace * healthPointsRemaining

        this.context.lineWidth = 3
        this.context.strokeStyle = 'red'

        this.context.beginPath()
        this.context.moveTo(this.canvasPosition.x, this.canvasPosition.y - Y_OFFSET)
        this.context.lineTo(this.canvasPosition.x + healthBarSize, this.canvasPosition.y - Y_OFFSET)
        this.context.stroke()
    }
}