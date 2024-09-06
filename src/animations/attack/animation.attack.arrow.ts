import {ElementPosition} from "../../elements/element.js";
import {AnimationAttack} from "./animation.attack.js";
import {positionToCanvasPosition} from "../../helper/canvas.js";

export class AnimationAttackArrow extends AnimationAttack {
    public static ARROW_SIZE = 2

    public start(startingPosition: ElementPosition, targetPosition: ElementPosition) {
        const startingPositionCanvas = positionToCanvasPosition(startingPosition)
        const targetPositionCanvas = positionToCanvasPosition(targetPosition)

        // TODO center animation in start field and target field
        this.context.beginPath()
        this.context.moveTo(startingPositionCanvas.x, startingPositionCanvas.y)
        this.context.lineTo(targetPositionCanvas.x, targetPositionCanvas.y)
        this.context.stroke()
    }
}