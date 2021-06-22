import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import Settings from './Screens/Settings';
import SignupScreen from './Screens/SignupScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return <>{loading ? <SplashScreen /> : <HomeScreen />}</>;
};
const Stack = createStackNavigator();
const HomeScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="TabMenu" component={TabMenu} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createMaterialBottomTabNavigator();
const TabMenu= () => {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
        activeColor="#09bff2"
        inactiveColor='gray'
        barStyle={{ backgroundColor: 'white' }}
        // labeled={false}
        >
      <Tab.Screen name="Home" component={Home}
        options={{
            tabBarLabel: 'Trang Chủ',
            tabBarIcon: ({color}) => (
              <Icon name="planet" size={24} color={color} />
            ),
          }}
      />
      <Tab.Screen name="Cart" component={Cart} 
          options={{
            tabBarLabel: 'Giỏ hàng',
            tabBarIcon: ({color}) => (
              <Icon name="cart" size={24} color={color} />
            ),
          }}
      />
      <Tab.Screen name="Settings" component={Settings} 
        options={{
            tabBarLabel: 'Cá nhân',
            tabBarIcon: ({color}) => (
              <Icon name="person" size={24} color={color} />
            ),
          }}
      />
    </Tab.Navigator>
  )
}
export default App;

const styles = StyleSheet.create({});
