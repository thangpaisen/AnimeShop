import React,{useState} from 'react';
import {StyleSheet, Text, View, Pressable,TextInput,ScrollView} from 'react-native';
import Header from './Header';
import Product from '../../components/Home/NewProducts/Product';
import Loading from '../../Screens/Loading';

import {useSelector} from 'react-redux'
const SearchProductsOK = ({route}) => {
  const {value} = route.params;
  const {data,loading} = useSelector(state => state.productsSearch)
  return (
    <View style={styles.container}>
        <Header value={value}/>
        {
          loading?<Loading/>
          :
        data.length === 0 ? 
        (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Không có sản phẩm nào cả Ahihi</Text>
            </View>
        ) : 
        (
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.main}>
                {data.map(item => (
                <Product key={item._id} item={item} />
                ))}
            </View>
            </ScrollView>
        )
        }
    </View>
  );
};

export default SearchProductsOK;

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
