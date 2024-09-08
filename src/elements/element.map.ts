import {GameElement} from "./element.js";
import {ElementTile} from "./tiles/element.tile.js";
import {TILE_CLASSES_MAP} from "./tiles/element.tile.constants.js";
import {ElementCreatureNali} from "./creatures/creature.nali.js";
import {ElementCreature} from "./creatures/creature.js";
import {state} from "../state.js";
import {ElementTower} from "./tower/tower.js";
import {ElementTowerArrow} from "./tower/tower.arrow.js";
import {TILE_HEIGHT, TILE_WIDTH} from "../helper/canvas.constants.js";
import {GameMap} from "../maps/map.js";

export class ElementMap extends GameElement {
    public map: GameMap

    public creatures: ElementCreature[] = []

    public towers: ElementTower[] = []

    constructor(map: GameMap) {
        super();
        this.map = map

        // Add one test creature for now
        const nali = new ElementCreatureNali({position: {x: 0, y: 1}})
        this.creatures.push(nali)

        // Add one test tower for now
        const testTower = new ElementTowerArrow({position: {x: 3, y: 2}})
        this.towers.push(testTower)
    }

    public get elements(): GameElement[] {
        return [...this.generateTiles(), ...this.creatures, ...this.towers]
    }

    public get width() {
        // We assume that each row has the same length
        const firstRow = this.map.layout[0]
        return firstRow.length * TILE_WIDTH
    }

    public get height() {
        return this.map.layout.length * TILE_HEIGHT
    }

    public draw(frameCount: number) {
        this.moveCreatures(frameCount)
        super.draw(frameCount)
        this.letTowersAttack()
    }

    private moveCreatures(frameCount: number) {
        this.creatures.forEach((creature, index) => {
            if (frameCount % (1 / creature.speed) === 0) {
                const nextPosition = creature.getNextPosition(this.map)

                if (nextPosition !== null) {
                    creature.move(nextPosition)
                } else {
                    state.healthPoints -= 1
                    this.creatures.splice(index, 1)
                }
            }
        })
    }

    private letTowersAttack() {
        this.towers.forEach(tower => {
            tower.attack(this.creatures)
            this.removeDeadCreatures()
        })
    }

    private removeDeadCreatures() {
        this.creatures = this.creatures.filter(creature => creature.healthPoints > 0)
    }

    private generateTiles(): ElementTile[] {
        const tiles = []

        for (let y = 0; y < this.map.layout.length; y += 1) {
            const row = this.map.layout[y]

            for (let x = 0; x < row.length; x += 1) {
                const identifier = row[x]
                const TileClass = TILE_CLASSES_MAP[identifier]
                const tile = new TileClass({position: {x, y}})

                tiles.push(tile)
            }
        }

        return tiles
    }
}