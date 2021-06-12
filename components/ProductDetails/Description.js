import { Avatar } from 'react-native-elements'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-elements';
export default function Description() {
    return (
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
    )
}

const styles = StyleSheet.create({
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
  
})