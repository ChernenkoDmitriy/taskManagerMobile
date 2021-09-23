import { ICreateRoomState } from "./CreateRoomState";
import { ICreateRoomUseCase } from "../useCases/CreateRoomUseCase";
import { IFindUsersUseCase } from "../useCases/FindUsersUseCase";
import { IRoomMember } from "../../common/models/IRoomMember";
import { Keyboard } from "react-native";
import { IStackNavigation } from "../../../src/navigation/INavigation/IStackNavigation";
import { IRoom } from "../../common/models/IRoom";
import { IRepository } from "../../common/repository/IRepository";

export interface ICreateRoomController {
    onChangeRoomName: (data: string) => void;
    onChangeSearchUsersString: (data: string) => void;
    onFindUsers: () => Promise<void>;
    onCreateRoom: (navigation: IStackNavigation) => Promise<void>;
    onUnmounted: () => void;
    onChoseCandidate: (candidate: IRoomMember) => void;
}

export class CreateRoomController implements ICreateRoomController {
    constructor(
        private state: ICreateRoomState,
        private createRoomUseCase: ICreateRoomUseCase,
        private findUsersUseCase: IFindUsersUseCase,
        private chosenRoomStore: IRepository<IRoom>,
    ) { }

    private getAllCandidates = () => {
        const { email, id, logo, name } = this.state.user;
        const candidates = [...this.state.chosenCandidates, { email, id, logo, name }];
        return candidates;
    }

    onCreateRoom = async (navigation: IStackNavigation) => {
        const candidates = this.getAllCandidates();
        await this.createRoomUseCase.createRoom(candidates);
        if (this.chosenRoomStore.data) {
            navigation.replace('RoomScreen');
        }
    }

    onChoseCandidate = (candidate: IRoomMember) => {
        if (this.state.chosenCandidates.some(roomMember => roomMember.id === candidate.id)) {
            const chosenCandidates = this.state.chosenCandidates.filter(item => item.id !== candidate.id);
            this.state.setChosenCandidates(chosenCandidates);
        } else {
            this.state.setChosenCandidates([candidate, ...this.state.chosenCandidates]);
        }
    }

    onChangeRoomName = (data: string) => {
        this.state.setRoomName(data);
    }

    onChangeSearchUsersString = (data: string) => {
        this.state.setSearchUsersString(data);
    }

    onFindUsers = async () => {
        Keyboard.dismiss();
        await this.findUsersUseCase.findUsers('name', this.state.searchUsersString);
    }

    onUnmounted = () => {
        this.state.setDefaultState();
    }

}
