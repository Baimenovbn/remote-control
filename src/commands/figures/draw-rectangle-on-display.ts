import {moveMouseInDirection} from "../mouse";

export function drawRectangleOnDisplay(command: string, [length, width]: string[]) {
    moveMouseInDirection('mouse_down', [length]);
    moveMouseInDirection('mouse_right', [width]);
    moveMouseInDirection('mouse_up', [length]);
    moveMouseInDirection('mouse_left', [width]);

    return command + length + ',' + width;
}
