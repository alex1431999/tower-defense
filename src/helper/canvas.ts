import {CanvasPosition} from "../canvas.js";
import {ElementPosition} from "../elements/element.js";
import {TILE_HEIGHT, TILE_WIDTH} from "./canvas.constants.js";

export function positionToCanvasPosition(position: ElementPosition): CanvasPosition {
    return {x: position.x * TILE_WIDTH, y: position.y * TILE_HEIGHT}
}

export function canvasPositionToPosition(canvasPosition: CanvasPosition): ElementPosition {
    const x = canvasPosition.x === 0 ? 0 : Math.floor(canvasPosition.x / TILE_WIDTH)
    const y = canvasPosition.y === 0 ? 0 : Math.floor(canvasPosition.y / TILE_HEIGHT)

    return {x, y}
}

export function centerPositionInTile(position: CanvasPosition, width: number, height: number): CanvasPosition {
    const x = position.x + (TILE_WIDTH - width) / 2
    const y = position.y + (TILE_HEIGHT - height) / 2

    return {x, y}
}