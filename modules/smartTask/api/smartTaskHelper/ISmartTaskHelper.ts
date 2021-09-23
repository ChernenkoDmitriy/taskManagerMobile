import { TSmartTaskPoint } from "../../../common/models/ISmartTask";

export interface ISmartTaskHelper {
    createPoint: () => TSmartTaskPoint;
    saveChosenTaskTask: () => void;
}