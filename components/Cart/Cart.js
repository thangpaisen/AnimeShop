import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
  FlatList
} from 'react-native';
import Header from './Header';
import CartItem from './CartItem';
const data = [
  {
    id: 1,
    title: 'Móc khóa mica anime Jujutsu Kaisen - Mẫu 3 ',
    image:
      'https://product.hstatic.net/1000273792/product/3_31cac2b2a9394d59acc77218074ebca3_large.jpg',
    price: 55000,
    sale: 69,
    rate: 5,
    sold: 69,
  },
  {
    id: 2,
    title: 'Móc khóa kim loại Nguyên tố Vision game Genshin Impact ',
    image:
      'https://product.hstatic.net/1000273792/product/1_7476fd4a35ce4aed8caf8e20194debf7_large.jpg',
    price: 55000,
    sale: 12,
    rate: 5,
    sold: 69,
  },
  {
    id: 3,
    title: 'Móc khóa mica anime Kimetsu no Yaiba',
    image:
      'https://product.hstatic.net/1000273792/product/0_53512bfb57584c98baa4a8bbe5f725d0_large.jpg',
    price: 55000,
    sale: 0,
    rate: 5,
    sold: 69,
  },
  {
    id: 4,
    title: 'Móc khóa mica anime Kimetsu no Yaiba',
    image:
      'https://product.hstatic.net/1000273792/product/0_53512bfb57584c98baa4a8bbe5f725d0_large.jpg',
    price: 55000,
    sale: 99,
    rate: 5,
    sold: 69,
  },
];
export default function Cart() {
  return (
    <View style={styles.cartContainer}>
      <Header />
      <FlatList
        data={data}
        renderItem={({item, index}) => <CartItem item={item} />}
        keyExtractor={(item) =>item.id.toString()}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  
});
