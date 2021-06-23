export interface ICreateTaskUseCase {
    createTask: () => Promise<void>;
}

export class CreateTaskUseCase implements ICreateTaskUseCase {
    constructor(

    ) { }

    createTask = async () => {
        try {

        } catch (error) {
            console.warn('CreateTaskUseCase -> createTask: ', error);
        }
    }

}
