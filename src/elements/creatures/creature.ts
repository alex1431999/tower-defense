import {ElementConfig, ElementPosition, GameElement} from "../element.js";
import {MapLayout} from "../../maps/maps.types";
import {TileIdentifier} from "../tiles/element.tile";

export class ElementCreature extends GameElement {
    public speed: number = 1

    public positionPrevious: ElementPosition

    constructor(config?: ElementConfig) {
        super(config);
        this.positionPrevious = this.position
    }

    public move(mapLayout: MapLayout) {
        const nextPosition = this.getNextPosition(mapLayout)

        if (nextPosition === null) {
            throw new Error(`There is no next position to move to from ${JSON.stringify(this.position)}`)
        }

        this.positionPrevious = this.position
        this.position = nextPosition
    }

    /**
     *  If this function returns null we know we have reached the end of the the map
     */
    public getNextPosition(mapLayout: MapLayout): ElementPosition | null {
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
}