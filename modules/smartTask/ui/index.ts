import { connector } from '../../../src/connector/Connector';
import { SmartTaskView } from './component';

export const SmartTaskScreen = connector.connect(SmartTaskView, 'smartTaskPresenter');
