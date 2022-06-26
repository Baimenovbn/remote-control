import {moveMouseInDirection} from "../mouse";

export function drawRectangleOnDisplay(command: string, [length, width]: string[]) {
    moveMouseInDirection('mouse_down', [length]);
    moveMouseInDirection('mouse_right', [width]);
    moveMouseInDirection('mouse_up', [length]);
    moveMouseInDirection('mouse_left', [width]);
    moveMouseInDirection('mouse_down', ['20']);

    return command + length + ',' + width;
}
