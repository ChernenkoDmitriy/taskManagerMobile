export interface IDeleteTaskUseCase {
    deleteTask: () => Promise<void>;
}

export class DeleteTaskUseCase implements IDeleteTaskUseCase {
    constructor(

    ) { }

    deleteTask = async () => {
        try {

        } catch (error) {
            console.warn('DeleteTaskUseCase -> deleteTask: ', error);
        }
    }

}
