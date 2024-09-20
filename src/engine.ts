import {ElementMap} from "./elements/element.map.js";
import {ALL_SPRITES} from "./assets/sprites/sprite.constants.js";
import {state} from "./state.js";
import {renderer} from "./renderer.js";

export class Engine {
    public canvas: HTMLCanvasElement

    public elementMap: ElementMap = new ElementMap()

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas

        renderer.registerRenderable(this.elementMap)
    }

    public async setup() {
        state.gameState = 'loading'

        await this.loadAssets()
        this.loadCanvas()

        renderer.start()

        state.gameState = 'active'
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