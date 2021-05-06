import { connector } from '../../../src/connector/Connector';
import { CreateNoteView } from './component';

export const CreateNoteScreen = connector.connect(CreateNoteView, 'createNotePresenter');
