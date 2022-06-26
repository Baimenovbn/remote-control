import { drawCircleOnDisplay, drawRectangleOnDisplay, drawSquareOnDisplay } from "./figures";
import { getMousePosition, moveMouseInDirection } from "./mouse";
import { getScreenshot } from "./get-screenshot";

export const commandsMapper: Record<string, (command: string, args: string[]) => Promise<string> | string> = {
    'draw_circle': drawCircleOnDisplay,
    'draw_rectangle': drawRectangleOnDisplay,
    'draw_square': drawSquareOnDisplay,

    'mouse_position': getMousePosition,

    'mouse_up': moveMouseInDirection,
    'mouse_down': moveMouseInDirection,
    'mouse_left': moveMouseInDirection,
    'mouse_right': moveMouseInDirection,

    'prnt_scrn': getScreenshot
}
