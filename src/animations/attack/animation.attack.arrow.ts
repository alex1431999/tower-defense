import {AnimationAttack} from "./animation.attack.js";
import {centerPositionInTile, positionToCanvasPosition} from "../../helper/canvas.js";
import {spriterTowerArrowAttack} from "../../assets/sprites/tower/attack/spriter.tower.arrow.attack.js";
import {FRAMES_PER_SECOND} from "../../renderer.constants.js";
import {renderer} from "../../renderer.js";

export class AnimationAttackArrow extends AnimationAttack {
    private step = 0

    public draw() {
        const totalSteps = FRAMES_PER_SECOND // It should take 1 second to arrive at the target

        const currentPositionCanvas = positionToCanvasPosition(this.currentPosition)
        const targetPositionCanvas = positionToCanvasPosition(this.targetPosition)

        const currentPositionCanvasCentered = centerPositionInTile(currentPositionCanvas, 1, 1)
        const targetPositionCanvasCentered = centerPositionInTile(targetPositionCanvas, 1, 1)

        const xDifference = targetPositionCanvasCentered.x - currentPositionCanvasCentered.x
        const yDifference = targetPositionCanvasCentered.y - currentPositionCanvasCentered.y

        const xStep = xDifference / totalSteps
        const yStep = yDifference / totalSteps

        this.context.drawImage(spriterTowerArrowAttack.image, this.currentPosition.x, this.currentPosition.y)

        this.currentPosition.x += xStep
        this.currentPosition.y += yStep
        this.step += 1

        if (this.step > totalSteps) {
            renderer.unregisterRenderable(this.id)
        }
    }
}