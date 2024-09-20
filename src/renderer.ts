import {Renderable, RenderableId} from "./renderable.js";
import {REFRESH_INTERVAL} from "./renderer.constants.js";

class Renderer {
    private renderables: Renderable[] = []

    private frameCount = 0

    public start() {
        setInterval(this.render.bind(this), REFRESH_INTERVAL)
    }

    public registerRenderable(renderable: Renderable): void {
        this.renderables.push(renderable)
    }

    public registerRenderables(renderables: Renderable[]) {
        renderables.forEach(this.registerRenderable.bind(this))
    }

    public unregisterRenderable(id: RenderableId) {
        this.renderables = this.renderables.filter(renderable => renderable.id !== id)
    }

    private render() {
        this.renderables.forEach(renderable => renderable.draw(this.frameCount))
        this.frameCount += 1
    }
}

export const renderer = new Renderer()