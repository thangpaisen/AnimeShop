import React,{useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import ProductItemP from './ProductItemP';
import Header from "./Header";
import {formatNumber} from '../../../utils';

const ListProducts = () => {
  const dataCart = useSelector(state => state.cart);
  const [hideProducts, setHideProducts] = useState(false);
  const handleHideProducts=() => {
      console.log('okk')
      setHideProducts(!hideProducts)
  }
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
    <View style={styles.container}>
      <Header hideProducts={hideProducts} handleHideProducts={handleHideProducts}/>
      <View style={[styles.listProducts,hideProducts?styles.hideProducts:null]}>
        {
            dataCart.map((item, index) =>
                <ProductItemP item={item}  key={index}/>
            )
        }
        <View style={styles.priceD}>
            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <Text style={{ color: '#666'}}>Tạm tính</Text>
                <Text style={{fontSize:16,color: '#666'}}>{formatNumber(showTotalPrice(dataCart))} đ</Text>
            </View>
                        <View style={{flexDirection: 'row',justifyContent:'space-between',paddingTop:10}}>
                <Text style={{color: '#666'}}>Phí vận chuyển</Text>
                <Text style={{fontSize:16,color: '#666'}}>23.000 đ</Text>
            </View>
        </View>
        <View style={styles.priceD}>
            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <Text style={{ fontSize:18,color: '#666'}}>Tổng cộng</Text>
                <Text style={{fontSize:20,color: 'black'}}>{formatNumber(showTotalPrice(dataCart)+23000)} đ</Text>
            </View>
        </View>
      </View>
    </View>
  );
};

export default ListProducts;

const styles = StyleSheet.create({
  container: {},
  
  listProducts: {
      
    marginTop: 10,
    paddingVertical: 5,
    borderTopWidth: 0.25,
    borderTopColor: '#94999c',
    borderBottomWidth: 0.25,
    borderBottomColor: '#94999c',

  },
  hideProducts: {
    width: 0, height: 0,
    transform: [{ scale: 0 }]
  },
  priceD:{
      marginTop:10,
      padding:10,
      paddingVertical:20,
      borderTopWidth: 0.25,
    borderTopColor: '#94999c',
},
});
