import { IRoom } from "../../../common/models/IRoom";

export interface ISendGetRooms {
    getRooms: (userId: string) => Promise<IRoom[] | null>
}