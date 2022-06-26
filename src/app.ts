import { WebSocketServer, createWebSocketStream } from 'ws';

import {Writable} from 'stream';
import {commandsHandler} from "./utils/commands-handler";

export function startWebsocketServer() {
    const wss = new WebSocketServer({ port: 8080 });

    wss.on('connection', (ws) => {
        const duplex = createWebSocketStream(ws, { encoding: 'utf-8'});

        const frontMessageHandlerStream = new Writable({
            write(chunk, encoding, callback) {
                commandsHandler(chunk.toString(), ws).then();
                callback(null);
            }
        });


        duplex.pipe(frontMessageHandlerStream);
    });
}

