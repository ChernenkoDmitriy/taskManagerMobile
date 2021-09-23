import { connector } from '../../../src/connector/Connector';
import { RoomsListView } from './component';

export const RoomsListScreen = connector.connect(RoomsListView, 'roomsListPresenter');
