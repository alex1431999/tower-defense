import {GameElement} from "./element.js";
import {MapLayout} from "../maps/maps.types.js";
import {ElementTile} from "./tiles/element.tile.js";
import {TILE_CLASSES_MAP} from "./tiles/element.tile.constants.js";

export class ElementMap extends GameElement {
    public elements: GameElement[]

    public mapLayout: MapLayout

    constructor(mapLayout: MapLayout) {
        super();
        this.mapLayout = mapLayout
        this.elements = this.generateTiles()
    }

    private generateTiles(): ElementTile[] {
        const tiles = []

        for (let i = 0; i < this.mapLayout.length; i += 1) {
            const row = this.mapLayout[i]

            for (let j = 0; j < row.length; j += 1) {
                const identifier = row[j]
                const x = j * ElementTile.WIDTH
                const y = i * ElementTile.HEIGHT
                const TileClass = TILE_CLASSES_MAP[identifier]
                const tile = new TileClass({x, y})

                tiles.push(tile)
            }
        }

        return tiles
    }
}