import {AnimationAttack} from "./animation.attack.js";
import {centerPositionInTile} from "../../helper/canvas.js";
import {spriteTowerArrowAttack} from "../../assets/sprites/tower/attack/sprite.tower.arrow.attack.js";
import {FRAMES_PER_SECOND} from "../../renderer.constants.js";
import {renderer} from "../../renderer.js";
import {ElementCanvasPosition} from "../../elements/element.js";
import {TILE_HEIGHT, TILE_WIDTH} from "../../helper/canvas.constants.js";

export class AnimationAttackArrow extends AnimationAttack {
    private totalSteps = 0

    private step = 0

    private xStepSize = 0

    private yStepSize = 0

    public start(startingPosition: ElementCanvasPosition, targetPosition: ElementCanvasPosition) {
        super.start(startingPosition, targetPosition);

        const totalSteps = FRAMES_PER_SECOND / 4 // It should take 0.25 second to arrive at the target

        const startingPositionCanvasCentered = centerPositionInTile(this.currentPosition, TILE_WIDTH, TILE_HEIGHT)
        const targetPositionCanvasCentered = centerPositionInTile(this.targetPosition, TILE_WIDTH, TILE_HEIGHT)

        const xDifference = targetPositionCanvasCentered.x - startingPositionCanvasCentered.x
        const yDifference = targetPositionCanvasCentered.y - startingPositionCanvasCentered.y


        this.step = 0
        this.totalSteps = totalSteps

        this.xStepSize = xDifference / totalSteps
        this.yStepSize = yDifference / totalSteps

        this.currentPosition = startingPositionCanvasCentered
    }

    public draw() {
        this.context.drawImage(spriteTowerArrowAttack.image, this.currentPosition.x, this.currentPosition.y)

        this.currentPosition.x += this.xStepSize
        this.currentPosition.y += this.yStepSize
        this.step += 1

        if (this.step > this.totalSteps) {
            renderer.unregisterRenderable(this.id)
        }
    }
}