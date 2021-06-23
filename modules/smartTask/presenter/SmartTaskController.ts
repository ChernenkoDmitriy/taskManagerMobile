import { ISmartTaskState } from "./SmartTaskState";
import { ICreateTaskUseCase } from "../useCases/CreateTaskUseCase";
        import { IDeleteTaskUseCase } from "../useCases/DeleteTaskUseCase";
        import { IEditTaskUseCase } from "../useCases/EditTaskUseCase";
        import { IUpdateTaskUseCase } from "../useCases/UpdateTaskUseCase";
        
export interface ISmartTaskController {

}

export class SmartTaskController implements ISmartTaskController {
    constructor(
        private state: ISmartTaskState,
        private createTaskUseCase: ICreateTaskUseCase,
        private deleteTaskUseCase: IDeleteTaskUseCase,
        private editTaskUseCase: IEditTaskUseCase,
        private updateTaskUseCase: IUpdateTaskUseCase,
        
    ) { }

}
