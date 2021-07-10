import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const Details = ({item}) => {
    return (
         <View style={styles.details}>
            <View style={styles.headerDetails}>
              <Text style={styles.textHeaderDetails}>Chi tiết sản phẩm</Text>
              <View style={styles.contentDetails}>
                <View style={styles.quantityRemain}>
                  <Text style={{flex:1,fontSize: 16,color:'gray'}}>Kho</Text>
                  <Text style={{flex:2,fontSize: 16,color:'gray'}}>{item.quantity}</Text>
                </View>
                <View style={styles.origin}>
                  <Text style={{flex:1,fontSize: 16,color:'gray'}}>Xuất xứ</Text>
                  <Text style={{flex:2,fontSize: 16,color:'gray'}}>Nhật pỏn</Text>
                </View>
                <View style={styles.sentFrom}>
                  <Text style={{flex:1,fontSize: 16,color:'gray'}}>Gửi từ</Text>
                  <Text style={{flex:2,fontSize: 16,color:'gray'}}>Đà Nặng</Text>
                </View>
                <Text style={{fontSize: 16,color:'gray',marginTop:20}}>
                {item.description}
                </Text>
              </View>
            </View>
          </View>
    )
}

export default Details
const styles = StyleSheet.create({
    details: {
    marginTop: 10,
   
    backgroundColor: 'white',
  },
  headerDetails: {
  },
  textHeaderDetails: {
    padding: 10,
    fontSize: 16,

  },
  contentDetails:{
    borderTopWidth:1,
    borderTopColor:"#f0f0f0",
    padding: 10,
  },
  quantityRemain:{
    flexDirection: 'row',
    paddingVertical:10,
  },
  origin:{
    flexDirection: 'row',
    paddingVertical:10,

  },
  sentFrom:{
    flexDirection: 'row',
    paddingVertical:10,
  }
})
