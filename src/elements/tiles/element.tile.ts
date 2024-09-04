import {GameElement} from "../element.js";

export type TilePosition = { x: number, y: number }

export type TileIdentifier = 'pa' | 'pl'

export abstract class ElementTile extends GameElement {
    public position: TilePosition

    public static WIDTH = 50

    public static HEIGHT = 50

    protected abstract color: string

    protected abstract identifier: TileIdentifier

    constructor(position: TilePosition) {
        super();
        this.position = position
    }

    public draw() {
        super.draw();

        this.context.fillStyle = this.color
        this.context.fillRect(this.position.x, this.position.y, ElementTile.WIDTH, ElementTile.HEIGHT)
    }
}