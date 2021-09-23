import { IRoom } from "../../common/models/IRoom";
import { IRepository } from "../../common/repository/IRepository";

export interface IRoomsListState {
    readonly userRooms: IRoom[],
    readonly isLoading: boolean,
    setUserRooms: (data: IRoom[]) => void;
    setIsLoading: (data: boolean) => void;
}

export class RoomsListState implements IRoomsListState {
    constructor(
        private userRoomsStore: IRepository<IRoom[]>,
        private isLoadingStore: IRepository<boolean>,
    ) { }

    get userRooms() {
        return this.userRoomsStore.data ?? [];
    }

    setUserRooms = (data: IRoom[]) => {
        this.userRoomsStore.save(data);
    }

    get isLoading() {
        return this.isLoadingStore.data ?? false;
    }

    setIsLoading = (data: boolean) => {
        this.isLoadingStore.save(data);
    }

}
