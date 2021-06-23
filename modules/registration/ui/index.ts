import { connector } from '../../../src/connector/Connector';
import { RegistrationView } from './component';

export const RegistrationScreen = connector.connect(RegistrationView, 'registrationPresenter');
