import { connector } from '../../../src/connector/Connector';
import { LaunchAppView } from './component';

export const LaunchAppScreen = connector.connect(LaunchAppView, 'launchAppPresenter');