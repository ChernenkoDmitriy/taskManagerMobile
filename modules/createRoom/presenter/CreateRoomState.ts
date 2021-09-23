import { IRoomMember } from "../../common/models/IRoomMember";
import { IUser } from "../../common/models/IUser";
import { IRepository } from "../../common/repository/IRepository";

export interface ICreateRoomState {
    readonly user: IUser;
    readonly roomName: string;
    readonly searchUsersString: string;
    readonly chosenCandidates: IRoomMember[];
    readonly membersCandidates: IRoomMember[];
    readonly isLoading: boolean;
    setSearchUsersString: (data: string) => void;
    setRoomName: (data: string) => void;
    setChosenCandidates: (data: IRoomMember[]) => void;
    setMembersCandidates: (data: IRoomMember[]) => void;
    setIsLoading: (data: boolean) => void;
    setDefaultState: () => void;
}

export class CreateRoomState implements ICreateRoomState {
    constructor(
        private roomNameStore: IRepository<string>,
        private searchUsersStringStore: IRepository<string>,
        private chosenCandidatesStore: IRepository<IRoomMember[]>,
        private membersCandidatesStore: IRepository<IRoomMember[]>,
        private isLoadingStore: IRepository<boolean>,
        private userStore: IRepository<IUser>,
    ) { }

    get roomName() {
        return this.roomNameStore.data ?? '';
    }

    setRoomName = (data: string) => {
        this.roomNameStore.save(data);
    }

    get user() {
        return this.userStore.data ?? {} as any;
    }

    get searchUsersString() {
        return this.searchUsersStringStore.data ?? '';
    }

    setSearchUsersString = (data: string) => {
        this.searchUsersStringStore.save(data);
    }

    get chosenCandidates() {
        return this.chosenCandidatesStore.data ?? [];
    }

    setChosenCandidates = (data: IRoomMember[]) => {
        this.chosenCandidatesStore.save(data);
    }

    get membersCandidates() {
        return this.membersCandidatesStore.data ?? [];
    }

    setMembersCandidates = (data: IRoomMember[]) => {
        this.membersCandidatesStore.save(data);
    }

    get isLoading() {
        return this.isLoadingStore.data ?? false;
    }

    setIsLoading = (data: boolean) => {
        this.isLoadingStore.save(data);
    }

    setDefaultState = () => {
        this.roomNameStore.save(null);
        this.searchUsersStringStore.save(null);
        this.chosenCandidatesStore.save(null);
        this.membersCandidatesStore.save(null);
        this.isLoadingStore.save(null);
    }

}
