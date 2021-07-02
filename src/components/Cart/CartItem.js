import React from 'react'
import { StyleSheet, Text, View,Dimensions,Pressable,Image,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import 'intl';
import 'intl/locale-data/jsonp/en';
export default function CartItem({item}) {
    const currentPrice = Intl.NumberFormat().format(item.price - item.price *item.sale/100);
    return (
        <View style={styles.cartItem}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.main}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {item.title}
          </Text>
          <Text style={styles.price}>{currentPrice} đ</Text>
          <View style={styles.quantity}>
            <TouchableOpacity style={styles.quantityDecrease}>
              <Icon name="caret-back-circle-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.quantityNumber}>1</Text>
            <TouchableOpacity style={styles.quantityIncrease}>
              <Icon
                name="caret-forward-circle-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.deleteItem}>
            <Icon  name="trash" size={24} color="black" />
        </TouchableOpacity>
        
      </View>
    )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WIDTH_IMAGE = windowWidth / 3.5;
const styles = StyleSheet.create({
    cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 5,
    padding:10,
    elevation:1,
  },
  image: {
    width: WIDTH_IMAGE,
    height: WIDTH_IMAGE,
    borderRadius: 5,
    resizeMode: 'stretch',
  },
  main: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: 'red',
  },
  quantity: {
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityNumber: {
    fontSize: 16,
    paddingHorizontal: 8,
  },
  deleteItem: {
    alignSelf: 'center',
    paddingLeft: 10,
    color: 'black',
  },
})
