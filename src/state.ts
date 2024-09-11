export type StateConfig = { healthPoints: number, startingBalance: number }

export type GameState = 'active' | 'inBetweenWaves' | 'finished' | 'loading'

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

    private get shadowRoot() {
        return document.getElementById('state').shadowRoot
    }

    private get healthPointsParagraph(): HTMLParagraphElement {
        return this.shadowRoot.getElementById('healthPoints') as HTMLParagraphElement
    }

    private get gameStatusParagraph(): HTMLParagraphElement {
        return this.shadowRoot.getElementById('gameStatus') as HTMLParagraphElement
    }

    private get balanceParagraph(): HTMLParagraphElement {
        return this.shadowRoot.getElementById('balance') as HTMLParagraphElement
    }
}

export const state = new State({healthPoints: 10, startingBalance: 100})