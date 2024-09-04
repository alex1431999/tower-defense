import {ElementOffset, ElementPosition, GameElement} from "../element.js";

export type TileIdentifier = 'pa' | 'pl'

export type TileConfig = { position: ElementPosition, offset: ElementOffset }

export abstract class ElementTile extends GameElement {
    public static WIDTH = 50

    public static HEIGHT = 50

    protected abstract color: string

    protected abstract identifier: TileIdentifier

    constructor(config: TileConfig) {
        super(config);
    }

    public draw() {
        super.draw();

        this.context.fillStyle = this.color
        this.context.fillRect(this.canvasPosition.x, this.canvasPosition.y, ElementTile.WIDTH, ElementTile.HEIGHT)
    }
}