import { INote, NotePoint } from "../../../common/models/INote";
import { v4 as uuidv4 } from 'uuid';
import { INoteHelper } from "./INoteHelper";

export class NoteHelper implements INoteHelper {
    private static instance: NoteHelper;

    constructor() {
        if (NoteHelper.instance) {
            return NoteHelper.instance;
        }
        NoteHelper.instance = this;
    }

    createNote = (title: string, content: string, points: NotePoint[]): INote => {
        const status = 'new';
        const priority = 'medium';
        const uid = uuidv4();
        const note: INote = { title, content, uid, status, priority, points };
        return note;
    }

    addNote = (oldNotes: INote[] = [], note: INote) => {
        const checkedNotes = oldNotes ?? []; 
        const notes = [note, ...checkedNotes];
        return notes;
    }

    editNote = (oldNotes: INote[] = [], note: INote) => {
        const isNoteExist = oldNotes.find(item => item.uid === note.uid);
        let notes;
        if (isNoteExist) {
            notes = oldNotes.map(item => item.uid === note.uid ? note : item)
        } else {
            notes = [note, ...oldNotes];
        }
        return notes;
    }

    deleteNote = (notes: INote[], uid: string) => {
        return notes.filter(item => item.uid !== uid);
    }

    createNotePoint = (): NotePoint => {
        const uid = uuidv4();
        const notePoint = { text: '', isDone: false, uid };
        return notePoint;
    }

    updateNotePointProgress = (note: INote, uid: string): INote => {
        const updatedNote = { ...note };
        updatedNote.points = updatedNote.points.map((item) => {
            if (item.uid === uid) {
                item.isDone = !item.isDone;
                return { ...item };
            }
            return { ...item };
        });
        return updatedNote;
    }

}
