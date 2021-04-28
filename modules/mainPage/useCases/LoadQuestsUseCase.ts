export interface ILoadQuestsUseCase {
    loadQuests: () => Promise<void>;
}

export class LoadQuestsUseCase implements ILoadQuestsUseCase {
    constructor(

    ) { }

    loadQuests = async () => {
        try {

        } catch (error) {
            console.warn('LoadQuestsUseCase -> loadQuests: ', error);
        }
    }

}
