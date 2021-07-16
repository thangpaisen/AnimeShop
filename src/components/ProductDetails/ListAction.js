import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux'
import {addToCart} from '../../redux/actions/cart';
export default function ListAction({product,handleOnAddToCart}) {
  return (
    <View style={styles.listAction}>
      <Button
        disabled={product.quantity!=0?false:true}
        icon={<Icon style={styles.icon} name="cart" size={24} color="white" />}
        buttonStyle={styles.buttonAddCart}
        titleStyle={styles.buttonTitle}
        title={product.quantity!=0?'Thêm vào giỏ hàng':'Hết hàng'}
        onPress={()=>
          handleOnAddToCart()
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  //action
  listAction: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  buttonAddCart: {
    backgroundColor: '#09bff2',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
  },
  buttonTitle: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 10,
  },
});
