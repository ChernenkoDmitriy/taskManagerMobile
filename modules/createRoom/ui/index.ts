import { connector } from '../../../src/connector/Connector';
import { CreateRoomView } from './component';

export const CreateRoomScreen = connector.connect(CreateRoomView, 'createRoomPresenter');
