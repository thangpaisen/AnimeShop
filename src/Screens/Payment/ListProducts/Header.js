import React from 'react'
import { StyleSheet, Text, View ,Pressable,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from "react-redux";
import {formatNumber} from '../../../utils';
const Header = ({hideProducts,handleHideProducts}) => {
    const dataCart = useSelector(state => state.cart)
    const showTotalPrice = (dataCart) =>{
      var total= 0;
      if(dataCart.length >0)
        {
          for (let index = 0; index < dataCart.length; index++) {
              total = dataCart[index].product.priceNew * dataCart[index].quantity + total;
          }
        }
      return total;
  }
    return (
        <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="cart-outline" size={24} color="#09bff2" />
          <TouchableOpacity 
            onPress={() =>handleHideProducts()}
            style={{flexDirection: 'row', alignItems: 'center'}}
            >
            <Text style={{color: '#09bff2', paddingLeft: 10}}>
              {hideProducts?'Hiện thông tin đơn hàng':'Ẩn thông tin đơn hàng'}
            </Text>
            <Icon name={hideProducts?"chevron-down-outline":"chevron-up-outline"} size={20} color="#09bff2" />
            {/* <Icon name="chevron-down-outline" size={24} color="#09bff2" /> */}
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>{formatNumber(showTotalPrice(dataCart)+23000)} đ</Text>
      </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
})
