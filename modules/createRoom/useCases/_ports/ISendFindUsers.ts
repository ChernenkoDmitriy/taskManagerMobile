import { IRoomMember } from "../../../common/models/IRoomMember";

export interface ISendFindUsers {
    findUsers: (findBy: 'mail' | 'name', value: string) => Promise<IRoomMember[] | null>;
}
