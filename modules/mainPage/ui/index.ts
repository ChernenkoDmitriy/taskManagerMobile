import { connector } from '../../../src/connector/Connector';
import { MainPageView } from './component';

export const MainPageScreen = connector.connect(MainPageView, 'mainPagePresenter');
