import {ElementTile, TileIdentifier} from "./element.tile.js";
import {spriteGrass} from "../../assets/sprites/sprite.grass.js";

export class ElementTilePlot extends ElementTile {
    public identifier: TileIdentifier = 'pl'

    protected sprite = spriteGrass
}