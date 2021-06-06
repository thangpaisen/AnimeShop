import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

export default function ListAction() {
    return (
        <View style={styles.listAction}>
            <TouchableOpacity style={styles.addCart}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
                THÊM VÀO GIỎ
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyNow}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
                MUA NGAY
            </Text>
            </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
     //action
  listAction: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addCart: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    marginHorizontal: 10,
    padding: 10,
  },
  buyNow: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'black',
    margin: 10,
    padding: 10,
  },
})
