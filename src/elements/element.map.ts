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

        for (let y = 0; y < this.mapLayout.length; y += 1) {
            const row = this.mapLayout[y]

            for (let x = 0; x < row.length; x += 1) {
                const identifier = row[x]
                const TileClass = TILE_CLASSES_MAP[identifier]
                const tile = new TileClass({x, y})

                tiles.push(tile)
            }
        }

        return tiles
    }
}