import {ElementMap} from "./elements/element.map.js";
import {GameElement} from "./elements/element.js";
import {MAP_FIRST} from "./maps/map.first.js";

export class Engine {
    public canvas: HTMLCanvasElement

    public elements: GameElement[] = [new ElementMap(MAP_FIRST)]

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