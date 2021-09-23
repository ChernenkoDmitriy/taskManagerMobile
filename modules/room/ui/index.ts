import { connector } from '../../../src/connector/Connector';
import { RoomView } from './component';

export const RoomScreen = connector.connect(RoomView, 'roomPresenter');
