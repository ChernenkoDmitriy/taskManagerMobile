export interface IUpdateTaskUseCase {
    updateTask: () => Promise<void>;
}

export class UpdateTaskUseCase implements IUpdateTaskUseCase {
    constructor(

    ) { }

    updateTask = async () => {
        try {

        } catch (error) {
            console.warn('UpdateTaskUseCase -> updateTask: ', error);
        }
    }

}
