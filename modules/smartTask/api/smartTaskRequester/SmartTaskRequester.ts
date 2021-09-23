import { ILogRequestError } from "../../../../libs/logger";
import { IRestPost } from "../../../../libs/requester";
import { ILinks } from "../../../../src/config";
import { IResponse } from "../../../common/models/IResponse";
import { ISmartTask } from "../../../common/models/ISmartTask";
import { ISendCreateSmartTask } from "../../useCases/_ports/ISendCreateRoom";
import { ISendUpdateSmartTask } from "../../useCases/_ports/ISendUpdateSmartTask";

export class SmartTaskRequester implements ISendCreateSmartTask, ISendUpdateSmartTask {
    constructor(
        private requestor: IRestPost,
        private links: ILinks,
        private logger: ILogRequestError,
    ) { }

    updateSmartTask = async (smartTask: ISmartTask, roomId: string, userId: string) => {
        try {
            const body = { note: smartTask, roomId, userId };
            const response = await this.requestor.post(this.links.LINKS.UPDATE_NOTES, body);
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            this.logger.logRequestError(this.links.LINKS.UPDATE_NOTES, { smartTask, roomId, userId }, error);
            return null;
        }
    }

    createSmartTask = async (smartTask: ISmartTask, roomId: string) => {
        try {
            const { title, content, points, status, priority } = smartTask;
            const body = { title, content, points, status, priority, roomId };
            const response = await this.requestor.post(this.links.LINKS.CREATE_NOTE, body);
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            this.logger.logRequestError(this.links.LINKS.CREATE_NOTE, { smartTask, roomId }, error);
            return null;
        }
    }

    private processingResponse = (response: IResponse) => {
        let result = null;
        if (response?.data?.status === 'ok') {
            result = response.data.data;
        } else {
            this.logger.logRequestError('SmartTaskRequester', { response }, response?.error);
        }
        return result;
    }

}
