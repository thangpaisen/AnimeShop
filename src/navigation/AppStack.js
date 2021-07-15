import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Settings from '../Screens/Settings';
import SearchProducts from '../Screens/SearchProducts';


import ProductDetails from '../components/ProductDetails';
import ListProducts from '../components/ListProducts';

const Stack = createStackNavigator();
const AppStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="TabMenu"
        screenOptions={{
          headerShown: false,
        }}>  
        <Stack.Screen name="TabMenu" component={TabMenu} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="ListProducts" component={ListProducts} />
        <Stack.Screen name="SearchProducts" component={SearchProducts} />
      </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();
const TabMenu = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#09bff2"
      inactiveColor="gray"
      barStyle={{backgroundColor: 'white'}}
      // labeled={false}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Trang Chủ',
          tabBarIcon: ({color}) => (
            <Icon name="planet" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Giỏ hàng',
          tabBarIcon: ({color}) => <Icon name="cart" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({color}) => (
            <Icon name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;