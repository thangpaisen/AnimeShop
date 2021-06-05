import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-elements';
import Header from './Header';
import ListAction from './ListAction';
export default function ProductDetails() {
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Image
            style={styles.imageProduct}
            source={{
              // uri: 'https://cf.shopee.vn/file/52435a1cc52a5e38a00eed1da5f77080',
              uri: 'https://product.hstatic.net/1000273792/product/z1_97735c4113e74912b3935225b9b2f6c9_large.jpg',
            }}
          />
          <View style={styles.description}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
              Mặt nạ che bịt mắt ngủ hình ếch xanh Pepe siêu bựa dành cho vozer
            </Text>
            <View style={styles.price}>
              <Text style={styles.currentPrice}>55.000 đ</Text>
              <Text style={styles.parentPrice}>69.000 đ</Text>
            </View>
            <View style={styles.ratting}>
              <Rating imageSize={16} readonly startingValue={5} />
              <Text style={styles.ratePoint}>4.9</Text>
              <View style={styles.sold}>
                <View
                  style={{
                    width: 1,
                    height: 12,
                    marginHorizontal: 10,
                    backgroundColor: '#999',
                  }}
                />
                <Text style={styles.soldPoint}>124 Đã bán</Text>
              </View>
            </View>
          </View>
          <View style={styles.selectSwatch}>
            <View style={styles.headerSelect}>
              <Text style={styles.textHeaderSelect}>Chọn mẫu</Text>
            </View>
            <View style={styles.selectList}>
              <View style={styles.selectItem}>
                <Text style={styles.textItem}>Lôi</Text>
              </View>
              <View style={styles.selectItem}>
                <Text style={styles.textItem}>Thủy</Text>
              </View>
              <View style={styles.selectItem}>
                <Text style={styles.textItem}>Phong</Text>
              </View>
              <View style={styles.selectItem}>
                <Text style={styles.textItem}>Nham</Text>
              </View>
              <View style={styles.selectItem}>
                <Text style={styles.textItem}>Băng</Text>
              </View>
              <View style={styles.selectItem}>
                <Text style={styles.textItem}>Thảo</Text>
              </View>
            </View>
          </View>
          <View style={styles.details}>
            <View style={styles.headerDetails}>
              <Text style={styles.textHeaderDetails}>Chi tiết sản phẩm</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Header/>
      {/* <ListAction/> */}
    </>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  
  main: {},
  imageProduct: {
    width: windowWidth,
    height: windowWidth,
    resizeMode: 'stretch',
    // backgroundColor: 'green',
  },
  description: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
  },
  price: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  currentPrice: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  parentPrice: {
    paddingHorizontal: 10,
    color: '#999',
    fontSize: 14,
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
  },
  ratting: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 14,
  },
  ratePoint: {
    paddingLeft: 10,
    color: 'black',
  },
  sold: {
    // paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  soldPoint: {},
  selectSwatch: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  headerSelect: {},
  textHeaderSelect: {
    fontSize: 16,
  },
  selectList: {
    // marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectItem: {
    marginRight: 10,
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#999',
  },
  textItem: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
 details:{
   marginTop: 10,
   paddingHorizontal: 10,
   backgroundColor: 'white',
 },
 headerDetails:{

 },
 textHeaderDetails:{
   paddingVertical:10,
   fontSize:16,
 }
});
