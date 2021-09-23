export interface IConnectSocket {
    connect: (url: string, id: string, token: string) => void;
}