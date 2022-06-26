import { WebSocketServer, createWebSocketStream } from 'ws';

import {Writable} from 'stream';
import {commandsHandler} from "./utils/commands-handler";
import {showWsParameters} from "./utils/show-ws-parameters";

const WS_PORT = 8080;

export function startWebsocketServer() {
    const wss = new WebSocketServer({ port: WS_PORT });

    wss.on('connection', (ws) => {
        showWsParameters(wss, WS_PORT);

        const duplex = createWebSocketStream(ws, { encoding: 'utf-8'});

        const frontMessageHandlerStream = new Writable({
            write(chunk, encoding, callback) {
                console.log(`Received: ${chunk}`);
                commandsHandler(chunk.toString(), ws).then();
                callback(null);
            }
        });


        duplex.pipe(frontMessageHandlerStream);

        process.on('SIGINT', () => {
            process.exit(0);
            ws.close(0);
        });

        wss.on('close', () => {
            ws.close(0);
        })
    });
}

