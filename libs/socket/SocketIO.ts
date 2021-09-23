import { io, Socket } from 'socket.io-client';
import { ISocket } from './ISocket/ISocket';

export class SocketIO implements ISocket {
    private static instance: SocketIO;
    private ws!: Socket;

    constructor() {
        if (SocketIO.instance) {
            return SocketIO.instance;
        }
        SocketIO.instance = this;
    };

    connect = (url: string, id: string, token: string) => {
        const params = `id=${id}&token=${token}`;
        this.ws = io(url, { query: params } as any);
        this.ws?.connect();

        this.ws.on('disconnect', function () {
            console.log('client socketio disconnect!')
        });

        this.ws.on('create_room', function (data: any) {
            console.log('client socketio create_room!', data)
        });
        // this.ws?.emit('chat', { test: 'test' })
    }

    send = (event: string, data: any) => {
        console.log(event, data)
        this.ws?.emit(event, data)
    }

}
