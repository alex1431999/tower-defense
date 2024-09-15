import {ElementPosition} from "../../elements/element.js";
import {AnimationAttack} from "./animation.attack.js";
import {centerPositionInTile, positionToCanvasPosition} from "../../helper/canvas.js";
import {spriterTowerArrowAttack} from "../../assets/sprites/tower/attack/spriter.tower.arrow.attack.js";
import {FRAMES_PER_SECOND, REFRESH_INTERVAL} from "../../rendering.constants.js";
import {doTimesWithDelay} from "../../helper/util.js";

export class AnimationAttackArrow extends AnimationAttack {
    public start(startingPosition: ElementPosition, targetPosition: ElementPosition) {
        const totalSteps = FRAMES_PER_SECOND // It should take 1 secodn to arrive at the target

        const startingPositionCanvas = positionToCanvasPosition(startingPosition)
        const targetPositionCanvas = positionToCanvasPosition(targetPosition)

        const startingPositionCanvasCentered = centerPositionInTile(startingPositionCanvas, 1, 1)
        const targetPositionCanvasCentered = centerPositionInTile(targetPositionCanvas, 1, 1)

        const xDifference = targetPositionCanvasCentered.x - startingPositionCanvasCentered.x
        const yDifference = targetPositionCanvasCentered.y - startingPositionCanvasCentered.y

        const xStep = xDifference / totalSteps
        const yStep = yDifference / totalSteps

        this.context.drawImage(spriterTowerArrowAttack.image, startingPositionCanvasCentered.x, startingPositionCanvasCentered.y)

        // TODO the below probably doesn't work because we are using the same refresh interval, but at a differnet starting time
        //  than the main loop, meaning that it will draw at different times and will make the arrow appear to "flicker"
        let nextPosition = startingPositionCanvasCentered
        doTimesWithDelay(() => {
            this.context.drawImage(spriterTowerArrowAttack.image, nextPosition.x, nextPosition.y)

            nextPosition.x += xStep
            nextPosition.y += yStep
        }, totalSteps, REFRESH_INTERVAL)
    }
}