import { ISmartTaskPresenter } from "../presenter/ISmartTaskPresenter";
import { SmartTaskController } from "../presenter/SmartTaskController";
import { SmartTaskState } from "../presenter/SmartTaskState";
import { CreateTaskUseCase } from "../useCases/CreateTaskUseCase";
import { DeleteTaskUseCase } from "../useCases/DeleteTaskUseCase";
import { EditTaskUseCase } from "../useCases/EditTaskUseCase";
import { UpdateTaskUseCase } from "../useCases/UpdateTaskUseCase";

export class SmartTaskFactory {
    private static presenter: ISmartTaskPresenter;

    static get() {
        if (!SmartTaskFactory.presenter) {
            SmartTaskFactory.presenter = new SmartTaskFactory().createPresenter();
        }
        return SmartTaskFactory.presenter;
    }

    private createPresenter = () => {
        const createTaskUseCase = new CreateTaskUseCase();
        const deleteTaskUseCase = new DeleteTaskUseCase();
        const editTaskUseCase = new EditTaskUseCase();
        const updateTaskUseCase = new UpdateTaskUseCase();

        const state = new SmartTaskState();
        const controller = new SmartTaskController(state, createTaskUseCase, deleteTaskUseCase, editTaskUseCase, updateTaskUseCase,);

        return { controller, state };
    }

}
