import { connector } from '../../../src/connector/Connector';
import { AuthorizationView } from './component';

export const AuthorizationScreen = connector.connect(AuthorizationView, 'authorizationPresenter');
