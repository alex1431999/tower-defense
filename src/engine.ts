import {ElementMap} from "./elements/element.map.js";
import {GameElement} from "./elements/element.js";

export class Engine {
    public canvas: HTMLCanvasElement

    public elements: GameElement[] = [new ElementMap()]

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
    }

    public setup() {
        this.canvas.width = 700
        this.canvas.height = 700
        this.canvas.style.background = 'black'
    }

    public draw() {
        this.elements.forEach(element => element.draw())
    }
}