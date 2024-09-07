import {ElementPosition} from "../../elements/element.js";
import {AnimationAttack} from "./animation.attack.js";
import {centerPositionInTile, positionToCanvasPosition} from "../../helper/canvas.js";

export class AnimationAttackArrow extends AnimationAttack {
    public static ARROW_SIZE = 2

    public start(startingPosition: ElementPosition, targetPosition: ElementPosition) {
        const startingPositionCanvas = positionToCanvasPosition(startingPosition)
        const targetPositionCanvas = positionToCanvasPosition(targetPosition)

        const startingPositionCanvasCentered = centerPositionInTile(startingPositionCanvas, 1, 1)
        const targetPositionCanvasCentered = centerPositionInTile(targetPositionCanvas, 1, 1)

        this.context.beginPath()
        this.context.moveTo(startingPositionCanvasCentered.x, startingPositionCanvasCentered.y)
        this.context.lineTo(targetPositionCanvasCentered.x, targetPositionCanvasCentered.y)
        this.context.stroke()
    }
}