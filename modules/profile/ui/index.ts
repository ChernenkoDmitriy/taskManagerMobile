import { connector } from '../../../src/connector/Connector';
import { ProfileView } from './component';

export const ProfileScreen = connector.connect(ProfileView, 'profilePresenter');
