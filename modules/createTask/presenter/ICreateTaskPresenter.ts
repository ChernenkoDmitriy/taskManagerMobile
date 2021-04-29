import { ICreateTaskController } from "./CreateTaskController";

export interface ICreateTaskPresenter {
    controller: ICreateTaskController;
    state: {
        readonly noteTitle: string;
        readonly noteContent: string;
    };
}
