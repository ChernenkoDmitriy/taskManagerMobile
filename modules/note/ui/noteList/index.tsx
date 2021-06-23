import { connector } from '../../../../src/connector/Connector';
import { NoteListView } from './component';

export const NoteListScreen = connector.connect(NoteListView, 'notePresenter');
