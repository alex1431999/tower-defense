import {ElementCreature} from "../elements/creatures/creature.js";

export type WaveConfig = {
    onDeployCreature: (creature: ElementCreature) => void
}

export abstract class Wave {
    public abstract creatures: ElementCreature[]

    public abstract creaturesRemaining: ElementCreature[]

    public creaturesDeployed: ElementCreature[] = []

    public config: WaveConfig

    protected constructor(config: WaveConfig) {
        this.config = config
    }

    public onTurn(frameCount: number) {
        // By default we will deploy just deploy one creature a turn, this can be overwritten by any wave
        // implementation
        if (this.creaturesRemaining.length) {
            this.deployCreature(0)
        }
    }

    public get hasDeployedAllCreatures(): boolean {
        return this.creaturesRemaining.length === 0
    }

    protected deployCreature(index: number) {
        const [creature] = this.creaturesRemaining.splice(index, 1)
        this.config.onDeployCreature(creature)
        this.creaturesDeployed.push(creature)
    }
}