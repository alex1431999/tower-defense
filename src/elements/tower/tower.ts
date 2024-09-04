import {ElementConfig, ElementPosition, GameElement} from "../element.js";
import {ElementTile} from "../tiles/element.tile.js";

export abstract class ElementTower extends GameElement {
    public abstract damage: number

    // Any field that is within this range can be attacked by this tower
    public abstract range: number

    public height: number = 25

    public width: number = 25

    constructor(config: ElementConfig) {
        super(config)
    }

    /**
     * By default, center all towers in the middle of the tile
     */
    public get canvasPosition(): ElementPosition {
        const position = super.canvasPosition

        position.x += (ElementTile.WIDTH - this.width) / 2
        position.y += (ElementTile.HEIGHT - this.height) / 2

        return position
    }
}