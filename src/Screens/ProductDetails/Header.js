import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {Avatar, Badge, withBadge} from 'react-native-elements';

import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
export default function Header({title,heightScroll}) {
  const navigation = useNavigation();
  const dataCart = useSelector(state => state.cart);
  const showTotalQuantity = dataCart => {
    var total = 0;
    if (dataCart.length > 0) {
      for (let index = 0; index < dataCart.length; index++) {
        total = dataCart[index].quantity + total;
      }
    }
    return Intl.NumberFormat().format(total);
  };
  return (
    <View style={[styles.header,heightScroll>100&&styles.headerTitleShow]}>
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" size={24} color="white" />
      </Pressable>
      <View style={[styles.title,heightScroll<100&&{transform: [{ scale: 0 }]}]}>
        <Text style={styles.textTitle}
         numberOfLines={1} ellipsizeMode="tail"
         >
          {title}
        </Text>
      </View>
      <Pressable
        style={styles.cart}
        onPress={() => navigation.navigate('Cart')}>
        <Icon name="cart-outline" size={24} color="white" />
        <Badge
          value={showTotalQuantity(dataCart)}
          status="error"
          containerStyle={{position: 'absolute', top: -4, right: -4}}
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 99999,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: 'transparent',
  },
  headerTitleShow:{
    backgroundColor: '#fff',
    borderBottomWidth: 0.3,
    borderBottomColor: '#c8c9c5',
  },
  back: {
    width: 32,
    height: 32,
    backgroundColor: 'gray',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    
  },
  textTitle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  cart: {
    width: 34,
    height: 34,
    backgroundColor: 'gray',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
