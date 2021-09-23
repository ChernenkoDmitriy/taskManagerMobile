import { IConfig } from "../../../../src/config";
import { IUser } from "../../../common/models/IUser";
import { IRepository } from "../../../common/repository/IRepository";
import { IConnectSocket } from "./_ports/IConnectSocket";

export interface IConnectSocketUseCase {
    connect: () => void;
}

export class ConnectSocketUseCase implements ConnectSocketUseCase {
    constructor(
        private config: IConfig,
        private socket: IConnectSocket,
        private userStore: IRepository<IUser>,
    ) { }

    connect = async () => {
        if (this.userStore.data) {
            const { token, id } = this.userStore.data;
            this.socket.connect(this.config.LINKS.SOCKET, id, token);

            // setTimeout(() => {
            //     this.socket?.send('create_room', { name: 'name', logo: 'logo', members: [{id:'60e54f1a10ecf60ad44b927c'}], admin: 'admin' })
            // }, 2000);
        }
    }

}
