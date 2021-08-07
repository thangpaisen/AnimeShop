import {formatNumber} from '../../../utils';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from "react-redux";

export default function ProductItemP({item}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const product = item.product;
  const model = item.model;
  return (
    <View style={styles.cartItem}>
      <Pressable
        onPress={() => navigation.navigate('ProductDetails', {item:product})}
        >
        <Image
          style={styles.image}
          source={{
            uri: product.image[0],
          }}
        />
        <View style={styles.quantity}>
            <Text style={styles.textQuantity}>
                {item.quantity}
            </Text>
        </View>
      </Pressable>
      <View style={styles.main}>
        <View style={{flex: 1, justifyContent:'center'}}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {product.title}
        </Text>
        {
          item.model&&
          <Text style={styles.model}>
          Model: {model}
        </Text>
        }
        </View>
        <View style={{justifyContent: 'center'}}>
        <Text style={styles.currentPrice}>
            {formatNumber(product.priceNew)} đ
          </Text></View>
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WIDTH_IMAGE = windowWidth / 5;
const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    borderRadius: 5,
    marginHorizontal: 5,
    padding: 10,
  },
  image: {
    width: WIDTH_IMAGE,
    height: WIDTH_IMAGE,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  quantity:{
      width:26,
      height:26,
      borderRadius:13,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#94999c',
      position: 'absolute',
      top: -10,
      right: -10,
  },
  textQuantity:{
      color: '#fff',
      fontWeight:'bold'
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    paddingRight:0,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
  },
  model:{
    fontSize: 14,
    color: 'gray',
    marginVertical:2,
  },
  currentPrice: {
      paddingLeft:10,
    fontSize: 16,
    color: '#666',
  },
});

