import { IRoomMember } from "../../common/models/IRoomMember";
import { IRepository } from "../../common/repository/IRepository";
import { ISendFindUsers } from "./_ports/ISendFindUsers";

export interface IFindUsersUseCase {
    findUsers: (findBy: 'mail' | 'name', value: string) => Promise<void>;
}

export class FindUsersUseCase implements IFindUsersUseCase {
    constructor(
        private findUsersRequester: ISendFindUsers,
        private membersCandidatesStore: IRepository<IRoomMember[]>,
        private isLoadingStore: IRepository<boolean>,
    ) { }

    findUsers = async (findBy: 'mail' | 'name', value: string) => {
        try {
            this.isLoadingStore.save(true);
            const membersCandidates = await this.findUsersRequester.findUsers(findBy, value);
            membersCandidates && this.membersCandidatesStore.save(membersCandidates);
            this.isLoadingStore.save(false);
        } catch (error) {
            console.warn('FindUsersUseCase -> findUsers: ', error);
        }
    }

}
