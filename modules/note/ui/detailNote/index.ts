import { connector } from '../../../../src/connector/Connector';
import { NoteDetailView } from './component';

export const NoteDetailScreen = connector.connect(NoteDetailView, 'notePresenter');
