import {ElementPosition} from "../elements/element.js";
import {ElementTile} from "../elements/tiles/element.tile";

export function positionToCanvasPosition(position: ElementPosition): ElementPosition {
    return {x: position.x * ElementTile.WIDTH, y: position.y * ElementTile.HEIGHT}
}