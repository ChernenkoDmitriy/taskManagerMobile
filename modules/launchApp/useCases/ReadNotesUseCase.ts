import { INote } from "../../common/models/INote";
import { IRepository } from "../../common/repository/IRepository";
import { IReadNotesTasksRooms } from "../api/Storage";

export interface IReadNotesUseCase {
    read: () => Promise<void>;
}

export class ReadNotesUseCase implements IReadNotesUseCase {
    constructor(
        private storage: IReadNotesTasksRooms,
        private notesStore: IRepository<INote[]>
    ) { }

    read = async () => {
        const { notes, rooms, tasks } = await this.storage.readNotesTasksTeams();
        notes && this.notesStore.save(notes);
    }

}
