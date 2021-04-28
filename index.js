import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';
import { configure } from "mobx";

configure({ useProxies: "never" });

AppRegistry.registerComponent(appName, () => App);
