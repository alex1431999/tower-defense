export type StateConfig = { healthPoints: number }

export class State {
    public _healthPoints: number

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

    private get healthPointsParagraph(): HTMLParagraphElement {
        return document.getElementById('healthPoints') as HTMLParagraphElement
    }
}

export const state = new State({healthPoints: 10})