import { ISmartTask, TSmartTaskPoint } from "../../../common/models/ISmartTask";

export interface ISmartTaskHelper {
    createPoint: () => TSmartTaskPoint;
    saveChosenTaskTask: (smartTask?: ISmartTask) => void;
}