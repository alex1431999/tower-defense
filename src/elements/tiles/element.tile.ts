import {GameElement} from "../element.js";

export type TilePosition = { x: number, y: number }

export class ElementTile extends GameElement {
    public position: TilePosition = {x: 0, y: 0}

    public static WIDTH = 50

    public static HEIGHT = 50

    public draw() {
        super.draw();

        this.context.fillStyle = 'white'
        this.context.fillRect(this.position.x, this.position.y, ElementTile.WIDTH, ElementTile.HEIGHT)
    }
}