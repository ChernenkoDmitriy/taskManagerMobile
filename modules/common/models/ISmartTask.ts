export interface ISmartTask {
    title: string;
    content: string;
    points: TSmartTaskPoint[];
    id: string;
    status: TTaskStatus;
    priority: TTaskPriority;
    lastUpdate: number;
}

export type TSmartTaskPoint = {
    text: string;
    isDone: boolean;
    id: string;
}

export type TTaskStatus = 'done' | 'inProgress' | 'new';
export type TTaskPriority = 'low' | 'medium' | 'high';