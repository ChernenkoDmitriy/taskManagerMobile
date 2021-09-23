import { IRoomMember } from "./IRoomMember";

export interface IRoom {
    id: string;
    name: string;
    admin: string;
    members: IRoomMember[];
    logo: string;
    createdAt: number;
}
