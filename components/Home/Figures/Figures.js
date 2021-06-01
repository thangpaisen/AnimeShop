import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FigureItem from './FigureItem';
const data = [
  {
    id: 1,
    title: 'Mô hình Nendoroid 1262 - Senku Ishigami - anime Dr. Stone',
    image:
      'https://product.hstatic.net/1000273792/product/47_81bbcad6c9e94ff8990202324575ff15_medium.jpg',
    price: 350000,
    sale: 12,
    rate: 5,
    sold: 999,
  },
  {
    id: 2,
    title: 'Mô hình Nendoroid 1334 - Zenitsu Agatsuma - anime Kimetsu no Yaiba',
    image:
      'https://product.hstatic.net/1000273792/product/f2_8e172c979bc84dd393fb55a809a2fc9f_medium.jpg',
    price: 350000,
    sale: 12,
    rate: 5,
    sold: 69,
  },
  {
    id: 3,
    title: 'Mô hình Tanjiro Kamado - anime Kimetsu no Yaiba',
    image:
      'https://product.hstatic.net/1000273792/product/f1a_6c1bef31e889479787956dc7d6e53df3_medium.jpg',
    price: 230000,
    sale: 0,
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
