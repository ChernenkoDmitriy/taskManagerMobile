import { connector } from '../../../src/connector/Connector';
import { ChangeLanguageView } from './component';

export const ChangeLanguageScreen = connector.connect(ChangeLanguageView, 'changeLanguagePresenter');
