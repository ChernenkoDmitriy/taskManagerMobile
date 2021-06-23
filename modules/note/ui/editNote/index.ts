import { connector } from '../../../../src/connector/Connector';
import { EditNoteView } from './component';

export const EditNoteScreen = connector.connect(EditNoteView, 'notePresenter');
