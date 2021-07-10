import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from './Header';
import Product from '../Home/NewProducts/Product';
import {useSelector} from 'react-redux';

export default function ListProducts({route}) {
  const {title, data} = route.params;
  console.log(data);
  console.log(title);
  return (
    <View style={styles.container}>
      <Header title={title} />
      {data.length == 0 ? 
      (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Chưa có sản phẩm nào cả Ahihi</Text>
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
      )}
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
