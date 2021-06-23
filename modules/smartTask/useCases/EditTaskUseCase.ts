export interface IEditTaskUseCase {
    editTask: () => Promise<void>;
}

export class EditTaskUseCase implements IEditTaskUseCase {
    constructor(

    ) { }

    editTask = async () => {
        try {

        } catch (error) {
            console.warn('EditTaskUseCase -> editTask: ', error);
        }
    }

}
