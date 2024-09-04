import {Tower} from "./tower.js";

export class TowerArrow extends Tower {
    public damage = 1

    public range = 2

    public draw(frameCount: number) {
        super.draw(frameCount);

        this.context.fillStyle = 'red'
        this.context.fillRect(this.canvasPosition.x, this.canvasPosition.y, this.width, this.height)
    }
}