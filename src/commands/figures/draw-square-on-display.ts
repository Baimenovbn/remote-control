import {drawRectangleOnDisplay} from "./draw-rectangle-on-display";

export const drawSquareOnDisplay = (command: string, [sideLength]: string[]) => {
  drawRectangleOnDisplay('draw_rectangle', [sideLength, sideLength]);

  return command + sideLength;
}