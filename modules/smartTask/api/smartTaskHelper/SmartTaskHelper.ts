import { toJS } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { ISmartTask, TSmartTaskPoint } from '../../../common/models/ISmartTask';
import { IRepository } from '../../../common/repository/IRepository';
import { ISmartTaskHelper } from './ISmartTaskHelper';

export class SmartTaskHelper implements ISmartTaskHelper {
    private static instance: SmartTaskHelper;

    constructor(
        private notesStore: IRepository<ISmartTask[]>,
        private chosenSmartTaskStore: IRepository<ISmartTask>,
    ) {
        if (SmartTaskHelper.instance) {
            return SmartTaskHelper.instance;
        }
        SmartTaskHelper.instance = this;
    }

    saveChosenTaskTask = (smartTask?: ISmartTask) => {
        let updatedNotes: ISmartTask[] = [];
        const notes = toJS(this.notesStore.data as ISmartTask[]);
        if (this.chosenSmartTaskStore.data?.id) {
            updatedNotes = notes?.map((note) => {
                if (note.id === this.chosenSmartTaskStore.data?.id) {
                    return toJS(this.chosenSmartTaskStore.data);
                }
                return note;
            }) ?? [];
        } else {
            updatedNotes = [smartTask as ISmartTask, ...notes];
        }
        this.notesStore.save(updatedNotes);
    }

    createPoint = (): TSmartTaskPoint => {
        const id = uuidv4();
        const notePoint = { text: '', isDone: false, id };
        return notePoint;
    }

    // createNote = (title: string, content: string, points: NotePoint[], priority: Priority): INote => {
    //     const status = 'new';
    //     const uid = uuidv4();
    //     const lastUpdate = Date.now();
    //     const note: INote = { title, content, uid, status, priority, points, lastUpdate };
    //     return note;
    // }

    // addNote = (oldNotes: INote[] = [], note: INote) => {
    //     const checkedNotes = oldNotes ?? [];
    //     const notes = [note, ...checkedNotes];
    //     return notes;
    // }

    // editNote = (oldNotes: INote[] = [], note: INote) => {
    //     const isNoteExist = oldNotes.find(item => item.uid === note.uid);
    //     let notes;
    //     const newNote = { ...note };
    //     newNote.lastUpdate = Date.now();
    //     if (isNoteExist) {
    //         notes = oldNotes.map(item => item.uid === newNote.uid ? newNote : item)
    //     } else {
    //         notes = [newNote, ...oldNotes];
    //     }
    //     return notes;
    // }

    // deleteNote = (notes: INote[], uid: string) => {
    //     return notes.filter(item => item.uid !== uid);
    // }



    // updateNotePointProgress = (note: INote, uid: string): INote => {
    //     const updatedNote = { ...note };
    //     updatedNote.lastUpdate = Date.now();
    //     updatedNote.points = updatedNote.points.map((item) => {
    //         if (item.uid === uid) {
    //             item.isDone = !item.isDone;
    //             return { ...item };
    //         }
    //         return { ...item };
    //     });
    //     return updatedNote;
    // }

}
