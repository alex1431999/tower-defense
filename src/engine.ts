import {ElementMap} from "./elements/element.map.js";
import {GameElement} from "./elements/element.js";
import {ALL_SPRITES} from "./assets/sprites/sprite.constants.js";
import {state} from "./state.js";

export class Engine {
    public canvas: HTMLCanvasElement

    public elementMap: ElementMap = new ElementMap()

    public frameCount = 0

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
    }

    public get elements(): GameElement[] {
        return [this.elementMap]
    }

    public async setup() {
        state.gameState = 'loading'

        await this.loadAssets()
        this.loadCanvas()

        state.gameState = 'active'
    }

    public draw() {
        this.elements.forEach(element => element.draw(this.frameCount))
    }

    protected loadCanvas() {
        this.canvas.width = this.elementMap.width
        this.canvas.height = this.elementMap.height
        this.canvas.style.background = 'black'
    }

    protected async loadAssets() {
        await this.loadSprites()
    }

    protected async loadSprites() {
        const promises = ALL_SPRITES.map(sprite => sprite.load())
        await Promise.all(promises)
    }
}