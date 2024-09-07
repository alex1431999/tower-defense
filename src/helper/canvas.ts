import {CanvasPosition} from "../canvas.js";
import {ElementPosition} from "../elements/element.js";
import {ElementTile} from "../elements/tiles/element.tile.js";

export function positionToCanvasPosition(position: ElementPosition): CanvasPosition {
    return {x: position.x * ElementTile.WIDTH, y: position.y * ElementTile.HEIGHT}
}

export function centerPositionInField(position: CanvasPosition, width: number, height: number): CanvasPosition {
    const x = position.x + (ElementTile.WIDTH - width) / 2
    const y = position.y + (ElementTile.HEIGHT - height) / 2

    return {x, y}
}