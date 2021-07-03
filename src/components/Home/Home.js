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

// import {fetchProducts} from '../../redux/actions/products';
// import {setProducts} from '../../redux/actions/products';
import {useSelector,useDispatch } from 'react-redux'

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
  const dispatch = useDispatch()
  // const dataProducts = useSelector((state) => state.products)
  // console.log(dataProducts)
  useEffect(() => {
    // dispatch(fetchProducts());
  },[])
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
    // <View style={styles.container}>
    //   {dataProducts.map((item,index) => 
    //       <Text key={index}>{item.name}</Text>
    //   )}
    // </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'red'
  }
});
