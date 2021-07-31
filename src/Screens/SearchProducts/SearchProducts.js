import React,{useState} from 'react';
import {StyleSheet, Text, View, Pressable,TextInput,ScrollView} from 'react-native';
import Header from './Header';
import HistorySearch from './HistorySearch';
import SearchTrending from './SearchTrending';

import Product from '../Home/NewProducts/Product';
import {useSelector} from 'react-redux'
const SearchProducts = () => {
  const historySearch = useSelector(state => state.historySearch)
  return (
    <View style={styles.container}>
        <Header/>
        {
          historySearch.length!==0 ?
          <HistorySearch/>:null
        }
        <SearchTrending/>
    </View>
  );
};

export default SearchProducts;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  main: {
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
