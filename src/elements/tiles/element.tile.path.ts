import {ElementTile, TileIdentifier} from "./element.tile.js";
import {spriteCobblestone} from "../../assets/sprites/sprite.cobblestone.js";

export class ElementTilePath extends ElementTile {
    public identifier: TileIdentifier = 'pa'

    protected sprite = spriteCobblestone
}