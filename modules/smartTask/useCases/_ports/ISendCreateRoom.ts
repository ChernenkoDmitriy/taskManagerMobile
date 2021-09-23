import { IResponse } from "../../../common/models/IResponse";
import { ISmartTask } from "../../../common/models/ISmartTask";

export interface ISendCreateSmartTask {
    createSmartTask: (smartTask: ISmartTask, roomId: string) => Promise<IResponse>;
}
