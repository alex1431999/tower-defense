import {canvas} from "./canvas.js";
import {Engine} from "./engine.js";

const REFRESH_INTERVAL = 500 // Every X ms we call draw and rerender all elements

function main() {
    const engine = new Engine(canvas)

    engine.setup()

    setInterval(engine.draw.bind(engine), REFRESH_INTERVAL)
}

main()