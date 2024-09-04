export type StateConfig = { healthPoints: number }

export class State {
    public healthPoints: number

    constructor(config: StateConfig) {
        this.healthPoints = config.healthPoints
    }
}