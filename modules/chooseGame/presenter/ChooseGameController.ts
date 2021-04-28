import { IChooseGameState } from "./ChooseGameState";

export interface IChooseGameController {

}

export class ChooseGameController implements IChooseGameController {
    constructor(
        private chooseGameState: IChooseGameState,
        
    ) { }

}
