import {AnimationAttack} from "./animation.attack.js";
import {renderer} from "../../renderer.js";
import {ElementPosition} from "../../elements/element.js";

export class AnimationAttackRocks extends AnimationAttack {
    public start(startingPosition: ElementPosition, targetPosition: ElementPosition) {
        super.start(startingPosition, targetPosition);
    }

    public draw() {
        console.log('attack')

        renderer.unregisterRenderable(this.id)
    }
}