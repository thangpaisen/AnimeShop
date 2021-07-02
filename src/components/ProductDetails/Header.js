import React from 'react'
import { StyleSheet, Text, View,Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
export default function Header() {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
          <Pressable 
            style={styles.back}
            onPress={()=>navigation.goBack()}
            >
            <Icon name="arrow-back-outline" size={24} color="white" />
          </Pressable>
          <Pressable 
            style={styles.cart}
             onPress={()=>navigation.navigate('Cart')}
            >
            <Icon name="cart-outline" size={24} color="white" />
          </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 99999,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: 'transparent',
  },
  back: {
    width: 32,
    height: 32,
    backgroundColor: 'gray',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cart: {
    width: 34,
    height: 34,
    backgroundColor: 'gray',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
