import { io, Socket } from 'socket.io-client';
import { ISocket } from './ISocket/ISocket';

export class SocketIO implements ISocket {
    private ws!: Socket;

    constructor() {

    };

    connect = (uid: string, token: string) => {
        const params = `uid=${uid}&token=${token}`;
        this.ws = io('http://localhost:3000/', { query: params });
        this.ws?.connect();

        this.ws.on('disconnect', function () {
            console.log('client socketio disconnect!')
        });

        this.ws.on('update room', function (data: any) {
            console.log('client socketio disconnect!', data)
        });
        // this.ws?.emit('chat', { test: 'test' })
    };

};