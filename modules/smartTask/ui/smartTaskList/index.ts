import { connector } from '../../../../src/connector/Connector';
import { SmartTaskListView } from './component';

export const SmartTaskListScreen = connector.connect(SmartTaskListView, 'smartTaskPresenter');
