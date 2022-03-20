import { connector } from '../../../src/connector/Connector';
import { RoomDetailsView } from './component';

export const RoomDetailsScreen = connector.connect(RoomDetailsView, 'roomDetailsPresenter');
