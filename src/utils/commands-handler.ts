import {WebSocket} from "ws";
import { commandsMapper } from "../commands/commands-mapper";
import robot from "robotjs";

export const commandsHandler = async (commandWithArgs: string, ws: WebSocket) => {
    const [command, ...args] = commandWithArgs.split(' ');

    const action = commandsMapper[command];
    if (action) {
        robot.mouseToggle('down');
        const result = await action(command, args);
        robot.mouseToggle('up');

        ws.send(result);
    }
}

