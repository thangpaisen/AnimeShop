import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from './Header';
import Product from '../Home/NewProducts/Product';
import {useSelector } from 'react-redux'

export default function ListProducts({route}) {
  const dataProducts = useSelector((state) => state.products)
  const {title} = route.params;
  console.log(title);
  return (
    <View style={styles.container}>
      <Header title={title} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          {dataProducts.map(item => (
            <Product key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
