/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SplashScreen from './Screens/SplashScreen';
import NetworkError from './Screens/NetworkError';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
