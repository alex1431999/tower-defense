import {canvas} from "../canvas.js";
import {Renderable} from "../renderable.js";

export abstract class GameAnimation extends Renderable {
    public canvas: HTMLCanvasElement = canvas

    protected get context() {
        return this.canvas.getContext('2d')
    }
}