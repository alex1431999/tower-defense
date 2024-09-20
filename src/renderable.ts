import {uuid} from "./helper/util.js"

export type RenderableId = string

export abstract class Renderable {
    public id: RenderableId

    public abstract draw(frameCount: number): void

    public afterDraw(frameCount: number) {
        return // Do nothing by default
    }

    protected constructor() {
        this.id = uuid()
    }
}