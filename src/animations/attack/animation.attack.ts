import {GameAnimation} from "../animation.js";
import {ElementPosition} from "../../elements/element.js";
import {renderer} from "../../renderer.js";

export abstract class AnimationAttack extends GameAnimation {
    protected startingPosition: ElementPosition = null

    protected targetPosition: ElementPosition = null

    protected currentPosition: ElementPosition = null

    public start(startingPosition: ElementPosition, targetPosition: ElementPosition) {
        this.startingPosition = startingPosition
        this.targetPosition = targetPosition
        this.currentPosition = startingPosition

        renderer.registerRenderable(this)
    }
}