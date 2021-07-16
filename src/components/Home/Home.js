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
const axios = require('axios');

import {fetchProducts} from '../../redux/actions/products';
import {fetchCategories} from '../../redux/actions/categories';
import {getDataCart} from '../../redux/actions/cart'
import {getDataHistorySearch} from '../../redux/actions/historySearch'
// import {setProducts} from '../../redux/actions/products';
import {useSelector,useDispatch } from 'react-redux'

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const Home = () => {
  const [netStatus, setNet] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    NetInfo.addEventListener(state => {
      setNet(state.isConnected);
    });
  });
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = () => {
    setRefreshing(true);
  }
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(getDataCart());
    dispatch(getDataHistorySearch());

    setRefreshing(false);
  },[refreshing])
  return (
    <>
      <Header/>
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
  container:{
    flex: 1,
    backgroundColor: 'red'
  }
});
