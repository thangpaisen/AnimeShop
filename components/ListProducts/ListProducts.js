import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from './Header';
import Product from '../Home/NewProducts/Product';
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
  {
    id: 5,
    title: 'Móc khóa mica anime Jujutsu Kaisen - Mẫu 3 ',
    image:
      'https://product.hstatic.net/1000273792/product/3_31cac2b2a9394d59acc77218074ebca3_large.jpg',
    price: 55000,
    sale: 69,
    rate: 5,
    sold: 69,
  },
  {
    id: 6,
    title: 'Móc khóa kim loại Nguyên tố Vision game Genshin Impact ',
    image:
      'https://product.hstatic.net/1000273792/product/1_7476fd4a35ce4aed8caf8e20194debf7_large.jpg',
    price: 55000,
    sale: 12,
    rate: 5,
    sold: 69,
  },
  {
    id: 7,
    title: 'Móc khóa mica anime Kimetsu no Yaiba',
    image:
      'https://product.hstatic.net/1000273792/product/0_53512bfb57584c98baa4a8bbe5f725d0_large.jpg',
    price: 55000,
    sale: 0,
    rate: 5,
    sold: 69,
  },
  {
    id: 8,
    title: 'Móc khóa mica anime Kimetsu no Yaiba',
    image:
      'https://product.hstatic.net/1000273792/product/0_53512bfb57584c98baa4a8bbe5f725d0_large.jpg',
    price: 55000,
    sale: 99,
    rate: 5,
    sold: 69,
  },
];
export default function ListProducts({route}) {
  const {title} = route.params;
  console.log(title);
  return (
    <View style={styles.container}>
      <Header title={title} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          {data.map(item => (
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
