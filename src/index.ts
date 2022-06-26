import {httpServer} from './http_server';
import { startWebsocketServer } from "./app";

const HTTP_PORT = 3000;
startWebsocketServer();

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
