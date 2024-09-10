export type StateConfig = { healthPoints: number }

export type GameState = 'active' | 'inBetweenWaves'

export class State {
    private _healthPoints: number

    private _gameState: GameState

    constructor(config: StateConfig) {
        this.healthPoints = config.healthPoints
    }

    public get healthPoints() {
        return this._healthPoints
    }

    public set healthPoints(healthPoints: number) {
        this._healthPoints = healthPoints
        this.healthPointsParagraph.innerText = `HP: ${healthPoints}`
    }

    public get gameState() {
        return this._gameState
    }

    public set gameState(gameState: GameState) {
        this._gameState = gameState
    }

    private get healthPointsParagraph(): HTMLParagraphElement {
        return document.getElementById('healthPoints') as HTMLParagraphElement
    }
}

export const state = new State({healthPoints: 10})