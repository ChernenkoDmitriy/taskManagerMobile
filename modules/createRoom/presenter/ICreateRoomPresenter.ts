import { IRoomMember } from "../../common/models/IRoomMember";
import { ICreateRoomController } from "./CreateRoomController";

export interface ICreateRoomPresenter {
    controller: ICreateRoomController;
    state: {
        readonly searchUsersString: string;
        readonly chosenCandidates: IRoomMember[];
        readonly membersCandidates: IRoomMember[];
        readonly isLoading: boolean;
        readonly roomName: string;
    };
}
