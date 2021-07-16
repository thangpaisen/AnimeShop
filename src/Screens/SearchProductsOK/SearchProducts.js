import React,{useState} from 'react';
import {StyleSheet, Text, View, Pressable,TextInput,ScrollView} from 'react-native';
import Header from './Header';
import Product from '../../components/Home/NewProducts/Product';
import {useSelector} from 'react-redux'
const SearchProducts = () => {
  const data = useSelector(state => state.productsSearch)
  return (
    <View style={styles.container}>
        <Header/>
        {
        // data.length == 0 ? 
        // (
        //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        //     <Text>Không có sản phẩm nào cả Ahihi</Text>
        //     </View>
        // ) : 
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

export default SearchProducts;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  main: {
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
