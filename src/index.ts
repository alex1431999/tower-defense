import './components/index.js'
import {canvas} from "./canvas.js";
import {Engine} from "./engine.js";
import {REFRESH_INTERVAL} from './rendering.constants.js';

async function main() {
    const engine = new Engine(canvas)

    await engine.setup()

    setInterval(() => {
        engine.draw()
        engine.frameCount += 1
    }, REFRESH_INTERVAL)
}

main()