import { connector } from '../../../src/connector/Connector';
import { SettingsView } from './component';

export const SettingsModal = connector.connect(SettingsView, 'settingsPresenter');
