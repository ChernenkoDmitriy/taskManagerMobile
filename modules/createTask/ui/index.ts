import { connector } from '../../../src/connector/Connector';
import { CreateTaskView } from './component';

export const CreateTaskScreen = connector.connect(CreateTaskView, 'createTaskPresenter');
