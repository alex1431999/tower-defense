export class Engine {
    public canvas: HTMLCanvasElement

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
    }

    public setup() {
        this.canvas.width = 700
        this.canvas.height = 700
        this.canvas.style.background = 'black'
    }

    public draw() {
        // TODO
    }
}