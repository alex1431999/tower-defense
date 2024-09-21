import {GameAnimation} from "../animation.js";
import {ElementCanvasPosition} from "../../elements/element.js";
import {renderer} from "../../renderer.js";

export abstract class AnimationAttack extends GameAnimation {
    protected startingPosition: ElementCanvasPosition = null

    protected targetPosition: ElementCanvasPosition = null

    protected currentPosition: ElementCanvasPosition = null

    public start(startingPosition: ElementCanvasPosition, targetPosition: ElementCanvasPosition) {
        this.startingPosition = startingPosition
        this.targetPosition = targetPosition
        this.currentPosition = startingPosition

        renderer.registerRenderable(this)
    }
}