import robot from "robotjs";

export function getMousePosition() {
    const { x, y } = robot.getMousePos();
    return `mouse_position ${x}px,${y}px \0`;
}
