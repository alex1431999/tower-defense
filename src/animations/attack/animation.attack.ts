import {GameAnimation} from "../animation.js";
import {ElementPosition} from "../../elements/element.js";

export abstract class AnimationAttack extends GameAnimation {
    public abstract start(startingPosition: ElementPosition, targetPosition: ElementPosition): void
}