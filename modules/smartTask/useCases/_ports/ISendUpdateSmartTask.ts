import { IResponse } from "../../../common/models/IResponse";
import { ISmartTask } from "../../../common/models/ISmartTask";

export interface ISendUpdateSmartTask {
    updateSmartTask: (smartTask: ISmartTask, roomId: string, userId: string) => Promise<IResponse>;
}
