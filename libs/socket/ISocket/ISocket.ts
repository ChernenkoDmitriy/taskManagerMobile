export interface ISocket {
    connect: (url: string, uid: string, token: string) => void;
}