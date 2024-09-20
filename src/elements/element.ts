import {canvas, CanvasPosition} from "../canvas.js";
import {positionToCanvasPosition} from "../helper/canvas.js";
import {Renderable} from "../renderable.js";

export type ElementPosition = { x: number, y: number }

export type ElementConfig = { position?: ElementPosition }

export class GameElement extends Renderable {
    public canvas: HTMLCanvasElement = canvas

    public position: ElementPosition

    public get elements(): GameElement[] {
        return []
    }

    constructor(config?: ElementConfig) {
        super()
        this.position = config?.position || {x: 0, y: 0}
    }

    public get canvasPosition(): CanvasPosition {
        return positionToCanvasPosition(this.position)
    }

    protected get context() {
        return this.canvas.getContext('2d')
    }

    /**
     * Gets triggered on each frame
     */
    public draw(frameCount: number) {
        this.elements.map(element => element.draw(frameCount))
    }
}