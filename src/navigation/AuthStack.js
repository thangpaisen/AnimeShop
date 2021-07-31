import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}>  
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
        ...TransitionPresets.SlideFromRightIOS,
      }}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{
        ...TransitionPresets.SlideFromRightIOS,
      }}/>
      </Stack.Navigator>
  );
};

export default AuthStack;