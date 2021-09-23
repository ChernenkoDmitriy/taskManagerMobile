import { IRoom } from "../../../common/models/IRoom";
import { IRoomMember } from "../../../common/models/IRoomMember";

export interface ISendCreateRoom {
    createRoom: (admin: string, members: IRoomMember[], name: string) => Promise<IRoom | null>;
}
