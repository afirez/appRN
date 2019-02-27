/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import HomePage from './app/pages/home/HomePage';
import MainPage from './app/pages/home/MainPage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainPage);
