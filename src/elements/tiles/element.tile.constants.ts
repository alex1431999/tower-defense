import {ElementTilePlot} from "./element.tile.plot.js";
import {ElementTilePath} from "./element.tile.path.js";
import {TileIdentifier} from "./element.tile.js";

export const TILE_CLASSES_MAP: Record<TileIdentifier, any> = {
    'pa': ElementTilePath,
    'pl': ElementTilePlot
}