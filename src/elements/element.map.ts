import {GameElement} from "./element.js";
import {MapLayout} from "../maps/maps.types.js";
import {ElementTile} from "./tiles/element.tile.js";
import {TILE_CLASSES_MAP} from "./tiles/element.tile.constants.js";
import {ElementCreatureNali} from "./creatures/creature.nali.js";
import {ElementCreature} from "./creatures/creature";

export class ElementMap extends GameElement {
    public mapLayout: MapLayout

    public creatures: ElementCreature[] = []

    constructor(mapLayout: MapLayout) {
        super();
        this.mapLayout = mapLayout

        // Add one test creature for now
        const nali = new ElementCreatureNali({position: {x: 0, y: 1}, offset: {x: 0, y: 65}})
        this.elements.push(nali)
        this.creatures.push(nali)
    }

    public get elements(): GameElement[] {
        return [...this.generateTiles(), ...this.creatures]
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

        for (let y = 0; y < this.mapLayout.length; y += 1) {
            const row = this.mapLayout[y]

            for (let x = 0; x < row.length; x += 1) {
                const identifier = row[x]
                const TileClass = TILE_CLASSES_MAP[identifier]
                const tile = new TileClass({position: {x, y}, offset: {x: ElementTile.WIDTH, y: ElementTile.HEIGHT}})

                tiles.push(tile)
            }
        }

        return tiles
    }
}