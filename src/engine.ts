import {ElementMap} from "./elements/element.map.js";
import {GameElement} from "./elements/element.js";

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

    public setup() {
        this.canvas.width = this.elementMap.width
        this.canvas.height = this.elementMap.height
        this.canvas.style.background = 'black'
    }

    public draw() {
        this.elements.forEach(element => element.draw(this.frameCount))
    }
}