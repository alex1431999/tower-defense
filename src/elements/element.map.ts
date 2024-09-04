import {GameElement} from "./element.js";
import {MapLayout} from "../maps/maps.types.js";
import {ElementTile} from "./tiles/element.tile.js";
import {TILE_CLASSES_MAP} from "./tiles/element.tile.constants.js";
import {ElementCreatureNali} from "./creatures/creature.nali.js";

export class ElementMap extends GameElement {
    public elements: GameElement[]

    public mapLayout: MapLayout

    constructor(mapLayout: MapLayout) {
        super();
        this.mapLayout = mapLayout
        this.elements = this.generateTiles()

        // Add one test creature for now
        const nali = new ElementCreatureNali()
        nali.position = {x: 0, y: 65}
        this.elements.push(nali)
    }

    public get width() {
        // We assume that each row has the same length
        const firstRow = this.mapLayout[0]
        return firstRow.length * ElementTile.WIDTH
    }

    public get height() {
        return this.mapLayout.length * ElementTile.HEIGHT
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