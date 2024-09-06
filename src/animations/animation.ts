import {canvas} from "../canvas.js";

export abstract class GameAnimation {
    public canvas: HTMLCanvasElement = canvas

    protected get context() {
        return this.canvas.getContext('2d')
    }
}