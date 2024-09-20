import './components/index.js'
import {canvas} from "./canvas.js";
import {Engine} from "./engine.js";

async function main() {
    const engine = new Engine(canvas)

    await engine.setup()
}

main()