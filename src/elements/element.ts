import {canvas} from "../canvas.js";

export class GameElement {
    public canvas: HTMLCanvasElement = canvas

    public elements: GameElement[] = []

    protected get context() {
        return this.canvas.getContext('2d')
    }

    /**
     * Gets triggered on each frame
     */
    public draw() {
        this.elements.map(element => element.draw())
    }
}