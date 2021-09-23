import { IRoom } from "../../common/models/IRoom";
import { IUser } from "../../common/models/IUser";
import { IRepository } from "../../common/repository/IRepository";
import { ISendGetRooms } from "./_ports/ISendGetRooms";

export interface IGetUserRoomsUseCase {
    getUserRooms: () => Promise<void>;
}

export class GetUserRoomsUseCase implements IGetUserRoomsUseCase {
    constructor(
        private isLoadingStore: IRepository<boolean>,
        private userStore: IRepository<IUser>,
        private userRoomsStore: IRepository<IRoom[]>,
        private requester: ISendGetRooms,
    ) { }

    getUserRooms = async () => {
        try {
            this.isLoadingStore.save(true);
            const userRooms = await this.requester.getRooms(this.userStore.data?.id as string);
            userRooms && this.userRoomsStore.save(userRooms);
            this.isLoadingStore.save(false);
        } catch (error) {
            console.warn('GetUserRoomsUseCase -> getUserRooms: ', error);
        }
    }

}
