export interface INote {
    title: string;
    content: string;
    points: NotePoint[];
    uid: string;
    status: 'done' | 'inProgress' | 'new';
    priority: Priority;
    lastUpdate: number;
}

export type NotePoint = {
    text: string;
    isDone: boolean;
    uid: string;
}

export type Priority = 'low' | 'medium' | 'high';