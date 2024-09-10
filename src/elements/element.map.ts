import {GameElement} from "./element.js";
import {ElementTile} from "./tiles/element.tile.js";
import {TILE_CLASSES_MAP} from "./tiles/element.tile.constants.js";
import {ElementCreature} from "./creatures/creature.js";
import {state} from "../state.js";
import {ElementTower} from "./tower/tower.js";
import {ElementTowerArrow} from "./tower/tower.arrow.js";
import {TILE_HEIGHT, TILE_WIDTH} from "../helper/canvas.constants.js";
import {GameMap} from "../maps/map.js";
import {MapFirst} from "../maps/map.first.js";

// The delay between a wave finising and the next one starting
const WAVE_DELAY = 2000 // 2 seconds

export class ElementMap extends GameElement {
    public map: GameMap

    public creatures: ElementCreature[] = []

    public towers: ElementTower[] = []

    constructor() {
        super();
        
        this.map = new MapFirst({onDeployCreature: this.onDeployCreature.bind(this)})
        this.map.start()

        state.gameState = 'active'

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
        if (this.hasWaveFinished) {
            this.deployNextWave()
        }

        if (state.gameState === 'active') {
            this.map.wave.onTurn(frameCount)
            this.moveCreatures(frameCount)
        }

        super.draw(frameCount)
        this.letTowersAttack()
    }

    private get hasWaveFinished() {
        return this.creatures.length === 0 && this.map.wave.hasDeployedAllCreatures
    }

    private onDeployCreature(creature: ElementCreature) {
        this.creatures.push(creature)
    }

    private deployNextWave() {
        this.map.nextWave()

        state.gameState = 'inBetweenWaves'

        setTimeout(() => {
            state.gameState = 'active'
        }, WAVE_DELAY)
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