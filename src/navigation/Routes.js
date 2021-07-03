import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from "./AuthProvider";

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {setUser} from  '../redux/actions/user'
import {useSelector,useDispatch } from 'react-redux'

const Routes = () => {
  const user = useSelector((state) => state.user)
  // const {user, setUser} = useContext(AuthContext);
    console.log('user1',user)
  
  const dispatch = useDispatch()
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    const action = setUser(user);
    console.log(user)
    dispatch(action)
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;