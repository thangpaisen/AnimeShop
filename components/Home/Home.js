import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from './Header';
import NewProducts from './NewProducts/NewProducts.js';
import HotSales from './HotSales/HotSales.js';
import Figures from './Figures/Figures.js';
import SlideShow from './SlideShow';
import Categories from './Categories/Categories';
import NetInfo from '@react-native-community/netinfo';
import NetworkError from '../../Screens/NetworkError';
const Home = () => {
  const [netStatus, setNet] = useState(true);
  useEffect(() => {
    NetInfo.addEventListener(state => {
      setNet(state.isConnected);
    });
  });
  return (
    <View>
      <Header />
      <NetworkError />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SlideShow />
        <Categories />
        <NewProducts />
        <HotSales />
        <Figures />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
