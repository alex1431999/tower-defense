import {ElementTowerName} from "./elements/tower/tower.js";
import {canvas} from "./canvas.js";

export type StateConfig = { healthPoints: number, startingBalance: number }

export type GameState = 'active' | 'inBetweenWaves' | 'finished' | 'loading'

export class State {
    private _healthPoints: number

    private _gameState: GameState

    private _balance: number

    private _towerForPurchaseSelected: ElementTowerName | null = null

    constructor(config: StateConfig) {
        this.healthPoints = config.healthPoints
        this.balance = config.startingBalance
    }

    public get healthPoints() {
        return this._healthPoints
    }

    public set healthPoints(healthPoints: number) {
        this._healthPoints = healthPoints
        this.safeDomUpdate<HTMLParagraphElement>('healthPoints', (element) => element.innerText = `HP: ${healthPoints}`)
    }

    public get gameState() {
        return this._gameState
    }

    public set gameState(gameState: GameState) {
        this._gameState = gameState
    }

    public get balance() {
        return this._balance
    }

    public set balance(balance: number) {
        if (balance < 0) {
            throw new Error('Balance cant be negative')
        }

        this._balance = balance
        this.safeDomUpdate<HTMLParagraphElement>('balance', (element) => element.innerText = `Balance: $${balance}`)
    }

    public get towerForPurchaseSelected() {
        return this._towerForPurchaseSelected
    }

    public set towerForPurchaseSelected(towerSelected: ElementTowerName | null) {
        this._towerForPurchaseSelected = towerSelected

        if (towerSelected === null) {
            canvas.style.cursor = 'unset'
        } else {
            canvas.style.cursor = 'crosshair'
        }
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

    private safeDomUpdate<T extends HTMLElement>(id: string, update: (element: T) => void) {
        const element = this.domGet<T>(id)

        if (element === null) {
            setTimeout(() => this.safeDomUpdate(id, update), 100)
        } else {
            update(element)
        }
    }

    private domGet<T extends HTMLElement>(id: string): T | null {
        const element = this.shadowRoot?.getElementById(id)
        return element as T || null
    }

    private get shadowRoot() {
        return document.getElementById('state').shadowRoot
    }
}

export const state = new State({healthPoints: 10, startingBalance: 150})