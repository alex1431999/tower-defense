import {canvas} from "../canvas.js";

export type ElementPosition = { x: number, y: number }

export type ElementOffset = { x: number, y: number }

export type ElementConfig = { position?: ElementPosition, offset?: ElementOffset }

export class GameElement {
    public canvas: HTMLCanvasElement = canvas

    public position: ElementPosition

    public offset: ElementOffset

    public get elements(): GameElement[] {
        return []
    }

    constructor(config?: ElementConfig) {
        this.position = config?.position || {x: 0, y: 0}
        this.offset = config?.offset || {x: 1, y: 1}
    }

    public get canvasPosition(): ElementPosition {
        return {x: this.position.x * this.offset.x, y: this.position.y * this.offset.y}
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