import robot from "robotjs";
import {TDirection} from "../../models/types/direction.type";

export function moveMouseInDirection(command: string, args: string[]) {
    const offset = args[0];
    const [_, direction] = command.split('_')

    const { x, y } = getCoordsToMove(direction as TDirection, +offset);
    robot.moveMouseSmooth(x, y);

    return command + '' + offset;
}

function getCoordsToMove(direction: TDirection, offset: number) {
    const { x, y } = robot.getMousePos();

    switch (direction) {
        case "up":
            return { x, y: y - offset };
        case "down":
            return { x, y: y + offset };
        case "left":
            return { x: x - offset, y };
        case "right":
            return { x: x + offset, y };
        default:
            return { x, y };
    }

}
