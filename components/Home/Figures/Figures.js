import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FigureItem from './FigureItem';
const data = [
  {
    id: 1,
    title: 'Móc khóa mica anime Kimetsu no Yaiba',
    image:
      'https://product.hstatic.net/1000273792/product/0_53512bfb57584c98baa4a8bbe5f725d0_large.jpg',
    price: 10000000,
    sale: 69,
    rate: 5,
    sold: 999,
  },
  {
    id: 2,
    title: 'Móc khóa mica anime Kimetsu no Yaiba',
    image:
      'https://product.hstatic.net/1000273792/product/0_53512bfb57584c98baa4a8bbe5f725d0_large.jpg',
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
const Figures = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
            😍 FIGURE - MÔ HÌNH
          </Text>
        </View>
        <TouchableOpacity style={styles.showAll}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>All</Text>
          <Icon name="chevron-forward-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>
      {/* <FlatList
        data={data}
        renderItem={({item, index}) => <FigureItem item={item} />}
        keyExtractor={item => item.id}
      /> */}
      {
        data.map((item, index) =><FigureItem key={index} item={item} />)
      }
    </View>
  );
};

export default Figures;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    // backgroundColor:'blue'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ededed',
    borderTopWidth:2,
    borderTopColor: '#49d292',
  },
  headerTitle: {
    paddingVertical: 15,
    backgroundColor: '#49d292',
    paddingHorizontal: 10,
  },
  showAll: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor:'red',
  },
});
