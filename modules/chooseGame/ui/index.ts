import { connector } from '../../../src/connector/Connector';
import { ChooseGameView } from './component';

export const ChooseGameScreen = connector.connect(ChooseGameView, 'chooseGamePresenter');
