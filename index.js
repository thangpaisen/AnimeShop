/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SplashScreen from './src/Screens/SplashScreen';
import NetworkError from './src/Screens/NetworkError';
import LoginScreen from './src/Screens/LoginScreen';
import Settings from './src/Screens/Settings';
import SignupScreen from './src/Screens/SignupScreen';
import ProductDetails from './src/components/ProductDetails';
import Cart from './src/components/Cart';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
