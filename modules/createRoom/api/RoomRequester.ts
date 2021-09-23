import { ILogRequestError } from "../../../libs/logger";
import { IRestPost } from "../../../libs/requester";
import { ILinks } from "../../../src/config";
import { IResponse } from "../../common/models/IResponse";
import { IRoomMember } from "../../common/models/IRoomMember";
import { ISendCreateRoom } from "../useCases/_ports/ISendCreateRoom";
import { ISendFindUsers } from "../useCases/_ports/ISendFindUsers";

export class RoomRequester implements ISendFindUsers, ISendCreateRoom {
    constructor(
        private requestor: IRestPost,
        private links: ILinks,
        private logger: ILogRequestError,
    ) { }

    createRoom = async (admin: string, members: IRoomMember[], name: string) => {
        try {
            const response = await this.requestor.post(this.links.LINKS.CREATE_ROOM, { admin, members, name });
            console.log('response ', response)
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            this.logger.logRequestError(this.links.LINKS.CREATE_ROOM, {  admin, members, name  }, error);
            return null;
        }
    }

    findUsers = async (findBy: 'mail' | 'name', value: string) => {
        try {
            const response = await this.requestor.post(this.links.LINKS.FIND_USERS, { findBy, value });
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            this.logger.logRequestError(this.links.LINKS.FIND_USERS, { findBy, value }, error);
            return null;
        }
    }

    private processingResponse = (response: IResponse) => {
        let result = null;
        if (response?.data?.status === 'ok') {
            result = response.data.data;
        } else {
            this.logger.logRequestError('RoomRequester', { response }, response?.error);
        }
        return result;
    }

}
