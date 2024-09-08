import {ElementConfig, ElementPosition, GameElement} from "../element.js";
import {MapLayout} from "../../maps/maps.types";
import {TileIdentifier} from "../tiles/element.tile.js";
import {TILE_HEIGHT, TILE_WIDTH} from "../../helper/canvas.constants.js";
import {GameMap} from "../../maps/map.js";

export abstract class ElementCreature extends GameElement {
    public abstract healthPoints: number

    public abstract maxHealthPoints: number

    public speed: number = 1

    public positionPrevious: ElementPosition

    public width = 25

    public height = 25

    constructor(config?: ElementConfig) {
        super(config);
        this.positionPrevious = this.position
    }

    public draw(frameCount: number) {
        super.draw(frameCount);
        this.drawHealthBar()
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
        const position = super.canvasPosition

        position.x += (TILE_WIDTH - this.width) / 2
        position.y += (TILE_HEIGHT - this.height) / 2

        return position
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