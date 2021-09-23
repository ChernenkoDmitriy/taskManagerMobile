import { BaseFactory } from "../../../src/baseFactory/BaseFactory";
import { MobXRepository } from "../../common/repository/MobXRepository";
import { IProfilePresenter } from "../presenter/IProfilePresenter";
import { ProfileController } from "../presenter/ProfileController";
import { ProfileState } from "../presenter/ProfileState";

export class ProfileFactory {
    private static presenter: IProfilePresenter;

    static get() {
        if (!ProfileFactory.presenter) {
            ProfileFactory.presenter = new ProfileFactory().createPresenter();
        }
        return ProfileFactory.presenter;
    }

    private createPresenter = () => {
        const { userStore } = BaseFactory.get();
        
        const state = new ProfileState(userStore);
        const controller = new ProfileController(state,);

        return { controller, state };
    }

}
