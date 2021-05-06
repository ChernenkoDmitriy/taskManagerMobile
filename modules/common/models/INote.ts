export interface INote {
    title: string;
    content: string;
    points: NotePoint[];
    uid: string;
    status: 'done' | 'inProgress' | 'new';
    priority: 'low' | 'medium' | 'high';
}

export type NotePoint = {
    text: string;
    isDone: boolean;
    uid: string;
}
