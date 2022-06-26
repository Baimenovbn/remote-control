import {WebSocket} from "ws";
import { commandsMapper } from "../commands/commands-mapper";

export const commandsHandler = async (commandWithArgs: string, ws: WebSocket) => {
    const [command, ...args] = commandWithArgs.split(' ');

    const action = commandsMapper[command];
    if (action) {
        const result = await action(command, args);

        ws.send(result + '\0');
    }
}

