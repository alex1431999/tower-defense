import {AnimationAttack} from "./animation.attack.js";
import {renderer} from "../../renderer.js";
import {ElementCanvasPosition} from "../../elements/element.js";
import {spriteTowerRocksAttack} from "../../assets/sprites/tower/attack/sprite.tower.rocks.attack.js";
import {FRAMES_PER_SECOND} from "../../renderer.constants.js";

export class AnimationAttackRocks extends AnimationAttack {
    private allSteps = FRAMES_PER_SECOND / 2   // We should see the animation for half a second

    private step = 0

    public start(startingPosition: ElementCanvasPosition, targetPosition: ElementCanvasPosition) {
        super.start(startingPosition, targetPosition);
        this.step = 0
    }

    public draw() {
        this.context.drawImage(spriteTowerRocksAttack.image, this.targetPosition.x, this.targetPosition.y)

        this.step += 1

        if (this.step >= this.allSteps) {
            renderer.unregisterRenderable(this.id)
        }
    }
}