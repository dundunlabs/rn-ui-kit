/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import withLazy from './src/components/withLazy';

import './src/repack/script-manager';

import 'react-native-svg';

const App = withLazy(() => import('./src/App'));

AppRegistry.registerComponent(appName, () => App);
