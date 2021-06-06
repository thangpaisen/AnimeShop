import React,{ useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './components/Home/Home';
import SplashScreen from './Screens/SplashScreen';
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return <>{loading ? <SplashScreen /> : <Home />}</>;
};

export default App;

const styles = StyleSheet.create({});
