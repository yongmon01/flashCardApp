/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlashCards from './components/FlashCards'

AppRegistry.registerComponent(appName, () => FlashCards);
