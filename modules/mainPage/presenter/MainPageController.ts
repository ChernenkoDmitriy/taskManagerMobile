import { IMainPageState } from "./MainPageState";
import { ILoadQuestsUseCase } from "../useCases/LoadQuestsUseCase";
        
export interface IMainPageController {

}

export class MainPageController implements IMainPageController {
    constructor(
        private mainPageState: IMainPageState,
        private loadQuestsUseCase: ILoadQuestsUseCase,
        
    ) { }

}
