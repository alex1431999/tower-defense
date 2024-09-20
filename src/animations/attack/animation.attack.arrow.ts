import {AnimationAttack} from "./animation.attack.js";
import {centerPositionInTile, positionToCanvasPosition} from "../../helper/canvas.js";
import {spriterTowerArrowAttack} from "../../assets/sprites/tower/attack/spriter.tower.arrow.attack.js";
import {FRAMES_PER_SECOND} from "../../renderer.constants.js";
import {renderer} from "../../renderer.js";
import {ElementPosition} from "../../elements/element.js";

export class AnimationAttackArrow extends AnimationAttack {
    private totalSteps = 0

    private step = 0

    private xStepSize = 0

    private yStepSize = 0

    public start(startingPosition: ElementPosition, targetPosition: ElementPosition) {
        super.start(startingPosition, targetPosition);

        const totalSteps = FRAMES_PER_SECOND // It should take 1 second to arrive at the target

        const startingPositionCanvas = positionToCanvasPosition(this.currentPosition)
        const targetPositionCanvas = positionToCanvasPosition(this.targetPosition)

        const startingPositionCanvasCentered = centerPositionInTile(startingPositionCanvas, 1, 1)
        const targetPositionCanvasCentered = centerPositionInTile(targetPositionCanvas, 1, 1)

        const xDifference = targetPositionCanvasCentered.x - startingPositionCanvasCentered.x
        const yDifference = targetPositionCanvasCentered.y - startingPositionCanvasCentered.y


        this.step = 0
        this.totalSteps = totalSteps

        this.xStepSize = xDifference / totalSteps
        this.yStepSize = yDifference / totalSteps

        this.currentPosition = startingPositionCanvasCentered
    }

    public draw() {

        this.context.drawImage(spriterTowerArrowAttack.image, this.currentPosition.x, this.currentPosition.y)

        this.currentPosition.x += this.xStepSize
        this.currentPosition.y += this.yStepSize
        this.step += 1

        if (this.step > this.totalSteps) {
            renderer.unregisterRenderable(this.id)
        }
    }
}