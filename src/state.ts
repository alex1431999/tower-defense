export type StateConfig = { healthPoints: number, startingBalance: number }

export type GameState = 'active' | 'inBetweenWaves' | 'finished'

export class State {
    private _healthPoints: number

    private _gameState: GameState

    private _balance: number

    constructor(config: StateConfig) {
        this.healthPoints = config.healthPoints
        this.balance = config.startingBalance
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
        this.gameStatusParagraph.innerText = `Status: ${gameState}`
    }

    public get balance() {
        return this._balance
    }

    public set balance(balance: number) {
        this._balance = balance
        this.balanceParagraph.innerText = `Balance: $${balance}`
    }

    public addToBalance(amount: number) {
        this.balance += amount
    }


    public pauseBetweenWaves(delay = 2000) {
        this.gameState = 'inBetweenWaves'

        setTimeout(() => {
            this.gameState = 'active'
        }, delay)
    }

    private get healthPointsParagraph(): HTMLParagraphElement {
        return document.getElementById('healthPoints') as HTMLParagraphElement
    }

    private get gameStatusParagraph(): HTMLParagraphElement {
        return document.getElementById('gameStatus') as HTMLParagraphElement
    }

    private get balanceParagraph(): HTMLParagraphElement {
        return document.getElementById('balance') as HTMLParagraphElement
    }
}

export const state = new State({healthPoints: 10, startingBalance: 100})