import {canvas} from "./canvas.js";
import {Engine} from "./engine.js";

function main() {
    const engine = new Engine(canvas)

    engine.setup()
}

main()