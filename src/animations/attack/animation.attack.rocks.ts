import {AnimationAttack} from "./animation.attack.js";
import {renderer} from "../../renderer.js";
import {ElementPosition} from "../../elements/element.js";
import {spriteTowerRocksAttack} from "../../assets/sprites/tower/attack/sprite.tower.rocks.attack.js";
import {positionToCanvasPosition} from "../../helper/canvas.js";
import {FRAMES_PER_SECOND} from "../../renderer.constants.js";

export class AnimationAttackRocks extends AnimationAttack {
    private allSteps = FRAMES_PER_SECOND / 2   // We should see the animation for half a second

    private step = 0

    public start(startingPosition: ElementPosition, targetPosition: ElementPosition) {
        super.start(startingPosition, targetPosition);
        this.step = 0
    }

    public draw() {
        const targetCanvasPosition = positionToCanvasPosition(this.targetPosition)

        this.context.drawImage(spriteTowerRocksAttack.image, targetCanvasPosition.x, targetCanvasPosition.y)

        this.step += 1

        if (this.step >= this.allSteps) {
            renderer.unregisterRenderable(this.id)
        }
    }
}