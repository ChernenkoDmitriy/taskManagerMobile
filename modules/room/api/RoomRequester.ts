import { ILogRequestError } from "../../../libs/logger";
import { IRestPost } from "../../../libs/requester";
import { ILinks } from "../../../src/config";
import { IResponse } from "../../common/models/IResponse";
import { IGetRoomTasksRequester } from "../useCases/_ports/IGetRoomTasksRequester";

export class RoomRequester implements IGetRoomTasksRequester {
    constructor(
        private requestor: IRestPost,
        private links: ILinks,
        private logger: ILogRequestError,
    ) { }

    getRoomTasks = async (roomId: string, userId: string): Promise<any> => {
        try {
            const response = await this.requestor.post(this.links.LINKS.GET_NOTES, { roomId, userId });
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            this.logger.logRequestError(this.links.LINKS.GET_NOTES, { roomId, userId }, error);
            return {error: false, data: null, messageKey: ''};
        }
    }

    private processingResponse = (response: IResponse) => {
        let result = {error: false, data: null, messageKey: ''};
        if (response?.data?.status === 'ok') {
            result = response.data.data;
        } else {
            this.logger.logRequestError('RoomRequester', { response }, response?.error);
        }
        return result;
    }

}
