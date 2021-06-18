import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, RefreshControl, View, ScrollView} from 'react-native';
import Header from './Header';
import NewProducts from './NewProducts/NewProducts.js';
import HotSales from './HotSales/HotSales.js';
import Figures from './Figures/Figures.js';
import SlideShow from './SlideShow';
import Categories from './Categories/Categories';
import NetInfo from '@react-native-community/netinfo';
import NetworkError from '../../Screens/NetworkError';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const Home = ({navigation}) => {
  const [netStatus, setNet] = useState(true);
  useEffect(() => {
    NetInfo.addEventListener(state => {
      setNet(state.isConnected);
    });
  });
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);
  return (
    <>
      <Header navigation={navigation}/>
     { !netStatus?<NetworkError/>:<ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <SlideShow />
        <Categories />
        <NewProducts />
        <HotSales />
        <Figures />
      </ScrollView>}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
});
