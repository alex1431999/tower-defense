import {ElementPosition, GameElement} from "./element.js";
import {ElementTile} from "./tiles/element.tile.js";
import {TILE_CLASSES_MAP} from "./tiles/element.tile.constants.js";
import {ElementCreature} from "./creatures/creature.js";
import {state} from "../state.js";
import {ElementTower} from "./tower/tower.js";
import {TILE_HEIGHT, TILE_WIDTH} from "../helper/canvas.constants.js";
import {GameMap} from "../maps/map.js";
import {MapFirst} from "../maps/map.first.js";
import {canvasPositionToPosition} from "../helper/canvas.js";
import {ElementTilePath} from "./tiles/element.tile.path.js";
import {ElementTilePlot} from "./tiles/element.tile.plot.js";
import {ALL_TOWER_CLASSES_MAP} from "./tower/tower.constants.js";
import {renderer} from "../renderer.js";

export class ElementMap extends GameElement {
    public map: GameMap

    public creatures: ElementCreature[] = []

    public towers: ElementTower[] = []

    public tiles: ElementTile[]

    constructor() {
        super();

        this.map = new MapFirst({
            onDeployCreature: this.onDeployCreature.bind(this),
            creatureStartingPosition: this.creatureStartingPosition
        })
        this.map.start()

        this.tiles = this.generateTiles()

        renderer.registerRenderables(this.tiles)

        state.gameState = 'active'

        this.canvas.onclick = this.onClick.bind(this)
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
        if (this.hasGameFinished) {
            state.gameState = 'finished'
            return
        }

        if (this.hasWaveFinished) {
            this.deployNextWave()
        }

        this.letTowersAttack()
    }

    public afterDraw(frameCount: number) {
        super.afterDraw(frameCount);

        if (state.gameState === 'active') {
            this.moveCreatures(frameCount)
            this.map.wave.onTurn(frameCount)
        }
    }

    private get creatureStartingPosition() {
        return {x: 0, y: 1} // TODO actually calculate based on the map layout
    }

    private onClick(event: PointerEvent) {
        this.resetActions()

        const x = event.offsetX
        const y = event.offsetY

        const position = canvasPositionToPosition({x, y})
        const tile = this.getTile(position)

        switch (tile.identifier) {
            case "pa":
                return this.onClickPath(tile as ElementTilePath)
            case "pl":
                return this.onClickPlot(tile as ElementTilePlot)
            default:
                throw new Error('The tile identifier cant hanlde an on click')
        }
    }

    private onClickPath(tile: ElementTilePath) {
        // TODO
    }

    private onClickPlot(tile: ElementTilePlot) {
        const towerOnPlot = this.getTowerByPosition(tile.position)

        if (towerOnPlot) {
            state.towerSelected = towerOnPlot
        } else if (state.towerForPurchaseSelected) {
            this.purchaseTower(tile)
        }
    }

    private resetActions() {
        state.towerSelected = null
    }

    private purchaseTower(tile: ElementTilePlot) {
        const towerName = state.towerForPurchaseSelected
        const TowerClass = ALL_TOWER_CLASSES_MAP[towerName]

        const tower = new TowerClass({position: tile.position})

        state.balance -= tower.price

        this.towers.push(tower)

        renderer.registerRenderable(tower)

        state.towerForPurchaseSelected = null
    }

    private getTile(position: ElementPosition) {
        return this.tiles.find(tile => tile.position.x === position.x && tile.position.y === position.y)
    }

    private get hasWaveFinished() {
        return this.creatures.length === 0 && this.map.wave.hasDeployedAllCreatures
    }

    private get hasGameFinished() {
        return this.creatures.length === 0 && this.map.finished
    }

    private onDeployCreature(creature: ElementCreature) {
        this.creatures.push(creature)
        renderer.registerRenderable(creature)
    }

    private deployNextWave() {
        this.map.nextWave()
        state.pauseBetweenWaves()
    }

    private moveCreatures(frameCount: number) {
        this.creatures.forEach((creature, index) => {
            if (frameCount % creature.speedNoramlised === 0) {
                const nextPosition = creature.getNextPosition(this.map)

                if (nextPosition !== null) {
                    creature.move(nextPosition)
                } else {
                    state.healthPoints -= 1
                    this.creatures.splice(index, 1)
                    renderer.unregisterRenderable(creature.id)
                }
            }
        })
    }

    private letTowersAttack() {
        this.towers.forEach(tower => {
            tower.attack(this.creatures)

            this.applyCurrencyReward()
            this.removeDeadCreatures()
        })
    }

    private applyCurrencyReward() {
        const creaturesKilled = this.creatures.filter(creature => creature.healthPoints <= 0)
        creaturesKilled.forEach(creature => state.addToBalance(creature.currencyReward))
    }

    private removeDeadCreatures() {
        this.creatures.forEach(creature => {
            if (creature.healthPoints <= 0) {
                renderer.unregisterRenderable(creature.id)
            }
        })
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

    private getTowerByPosition(position: ElementPosition) {
        return this.towers.find(tower => tower.position === position)
    }
}