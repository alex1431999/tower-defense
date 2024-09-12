import {ElementPosition, GameElement} from "../element.js";
import {Sprite} from "../../assets/sprites/sprite.js";

export type TileIdentifier = 'pa' | 'pl'

export type TileConfig = { position: ElementPosition }

export abstract class ElementTile extends GameElement {
    protected abstract sprite: Sprite

    public abstract identifier: TileIdentifier

    constructor(config: TileConfig) {
        super(config);
    }

    public draw(frameCount: number) {
        super.draw(frameCount);

        this.context.drawImage(this.sprite.image, this.canvasPosition.x, this.canvasPosition.y)
    }
}