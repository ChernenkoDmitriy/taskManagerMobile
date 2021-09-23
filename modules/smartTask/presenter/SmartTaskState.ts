import { ISmartTask } from "../../common/models/ISmartTask";
import { IRepository } from "../../common/repository/IRepository";

export interface ISmartTaskState {
    readonly chosenSmartTask: ISmartTask;
    readonly isLoading: boolean;
    setChosenSmartTask: (data: ISmartTask) => void;
    setIsLoading: (data: boolean) => void;
    setDefaultState: () => void;
}

export class SmartTaskState implements ISmartTaskState {
    private _defaultTask: ISmartTask = {
        title: '',
        content: '',
        points: [],
        id: '',
        status: 'new',
        priority: 'medium',
        lastUpdate: 0,
    };

    constructor(
        private chosenSmartTaskStore: IRepository<ISmartTask>,
        private isLoadingStore: IRepository<boolean>,
    ) { }

    get isLoading() {
        return this.isLoadingStore.data ?? false;
    }

    setIsLoading = (data: boolean) => {
        this.isLoadingStore.save(data);
    }

    get chosenSmartTask() {
        return this.chosenSmartTaskStore.data || this._defaultTask;
    }

    setChosenSmartTask = (data: ISmartTask) => {
        this.chosenSmartTaskStore.save(data);
    }

    setDefaultState = () => {
        this.chosenSmartTaskStore.save(null);
        this.isLoadingStore.save(null);
    }

}
