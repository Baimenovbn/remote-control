import {Server} from "ws";

export const showWsParameters = (ws: Server, port: number) => {
    console.log(`Websocket is running on ${port}`);

    ws.on('headers', (headers) => {
      console.log('\n\n------------------WebSocket Connection Parameters---------------------\n')
      headers.forEach((keyValue) => {
          const [key, value] = keyValue.split(' ');
          console.log(`${key}: ${value}`);
      })
      console.log('\n------------------WebSocket Connection Parameters---------------------\n\n')

  })
}