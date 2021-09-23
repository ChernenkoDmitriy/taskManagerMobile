import { ILogRequestError } from "../../../libs/logger";
import { IRestPost } from "../../../libs/requester";
import { ILinks } from "../../../src/config";
import { IResponse } from "../../common/models/IResponse";
import { ISendGetRooms } from "../useCases/_ports/ISendGetRooms";

export class GetRoomsRequester implements ISendGetRooms {
    constructor(
        private requestor: IRestPost,
        private links: ILinks,
        private logger: ILogRequestError,
    ) { }

    getRooms = async (userId: string) => {
        try {
            const response = await this.requestor.post(this.links.LINKS.GET_USER_ROOMS, { userId });
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            this.logger.logRequestError(this.links.LINKS.GET_USER_ROOMS, { userId }, error);
            return null;
        }
    }

    private processingResponse = (response: IResponse) => {
        let result = null;
        if (response?.data?.status === 'ok') {
            result = response.data.data;
        } else {
            this.logger.logRequestError('GetRoomsRequester', { response }, response?.error);
        }
        return result;
    }

}
