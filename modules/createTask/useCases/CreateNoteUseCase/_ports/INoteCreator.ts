import { INote } from "../../../../common/models/INote";

export interface INoteCreator {
    create: (title: string, content: string) => INote;
}
