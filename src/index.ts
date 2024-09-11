import './components/index.js'
import {canvas} from "./canvas.js";
import {Engine} from "./engine.js";

const REFRESH_INTERVAL = 500 // Every X ms we call draw and rerender all elements

async function main() {
    const engine = new Engine(canvas)

    await engine.setup()

    setInterval(() => {
        engine.draw()
        engine.frameCount += 1
    }, REFRESH_INTERVAL)
}

main()