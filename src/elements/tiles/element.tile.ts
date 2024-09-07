import {TILE_HEIGHT, TILE_WIDTH} from "../../helper/canvas.constants.js";
import {ElementPosition, GameElement} from "../element.js";

export type TileIdentifier = 'pa' | 'pl'

export type TileConfig = { position: ElementPosition }

export abstract class ElementTile extends GameElement {
    protected abstract color: string

    protected abstract identifier: TileIdentifier

    constructor(config: TileConfig) {
        super(config);
    }

    public draw(frameCount: number) {
        super.draw(frameCount);

        this.context.fillStyle = this.color
        this.context.fillRect(this.canvasPosition.x, this.canvasPosition.y, TILE_HEIGHT, TILE_WIDTH)
    }
}