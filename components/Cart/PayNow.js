import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';

export default function PayNow() {
  return (
    <View style={styles.payNowContainer}>
      <View style={styles.total}>
        <View style={styles.totalProduct}>
          <Text style={styles.totalProductQuantity}>9</Text>
          <Text>Sản phẩm</Text>
        </View>
        <View style={styles.totalPrice}>
          <Text>Thành tiền: </Text>
          <Text style={styles.totalPriceNumber}>123,456,000 đ</Text>
        </View>
      </View>
      <Button
        buttonStyle={styles.buttonPay}
        titleStyle={styles.buttonPayTitle}
        title={'Tiến hàng đặt hàng'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  payNowContainer: {
    // justifyContent:'space-around',
    backgroundColor: 'white',
    padding: 20,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  totalProduct: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalProductQuantity: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingRight: 6,
  },
  totalPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalPriceNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  buttonPay: {
    borderRadius: 10,
    backgroundColor: '#09bff2'
  },
  buttonPayTitle: {
    fontSize: 16,
  },
});
