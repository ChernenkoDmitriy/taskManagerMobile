import { IProfileState } from "./ProfileState";

export interface IProfileController {

}

export class ProfileController implements IProfileController {
    constructor(
        private state: IProfileState,

    ) { }

}
