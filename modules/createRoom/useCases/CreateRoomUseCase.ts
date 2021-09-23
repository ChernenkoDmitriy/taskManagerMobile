import { IRoom } from "../../common/models/IRoom";
import { IRoomMember } from "../../common/models/IRoomMember";
import { IUser } from "../../common/models/IUser";
import { IRepository } from "../../common/repository/IRepository";
import { ISendCreateRoom } from "./_ports/ISendCreateRoom";

export interface ICreateRoomUseCase {
    createRoom: (candidates: IRoomMember[]) => Promise<void>;
}

export class CreateRoomUseCase implements ICreateRoomUseCase {
    constructor(
        private isLoadingStore: IRepository<boolean>,
        private roomNameStore: IRepository<string>,
        private userStore: IRepository<IUser>,
        private chosenRoomStore: IRepository<IRoom>,
        private userRoomsStore: IRepository<IRoom[]>,
        private createRoomRequester: ISendCreateRoom,
    ) { }

    createRoom = async (candidates: IRoomMember[]) => {
        try {
            this.isLoadingStore.save(true);
            const room = await this.createRoomRequester.createRoom(
                this.userStore.data?.id as string,
                candidates,
                this.roomNameStore.data as string);
            room && this.chosenRoomStore.save(room);
            room && this.userRoomsStore.save([...this.userRoomsStore?.data as any, room]);
            this.isLoadingStore.save(false);
        } catch (error) {
            console.warn('CreateRoomUseCase -> createRoom: ', error);
        }
    }

}
