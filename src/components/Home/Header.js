import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Pressable } from 'react-native'
import { Avatar, Badge, withBadge } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native';
import 'intl';
import 'intl/locale-data/jsonp/en';
export default function Header() {
    const navigation = useNavigation();
    const dataCart = useSelector(state => state.cart)
    const showTotalQuantity = (dataCart) =>{
      var total= 0;
      if(dataCart.length >0)
        {
          for (let index = 0; index < dataCart.length; index++) {
              total = dataCart[index].quantity + total;
          }
        }
      return Intl.NumberFormat().format(total);
  }
    return (
        <View style={styles.container}>
            <Pressable 
                style={styles.headerSearch}
                onPress={()=>navigation.navigate('SearchProducts')}
                >
                <Icon name="search-outline" size={24} color="#999"/>
                <Text style={styles.textSearch}>Bạn tìm gì hôm nay?</Text>
            </Pressable>
            <TouchableOpacity
                 onPress={()=>navigation.navigate('Cart')}
            >
                <Icon style={styles.cart} name="cart-outline" size={26} color="white"/>
                <Badge value={showTotalQuantity(dataCart)} status="error" containerStyle={{ position: 'absolute', top: -4, right:0 }}/>
                
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:"#09bff2",
        paddingVertical:8,
        alignItems:'center',
    },
    headerSearch:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        paddingHorizontal:10,
        marginLeft:10,
        borderRadius:5,
    },
    textSearch:{
        color:"#999",
        fontSize:16,
        padding:10,
    },
    cart:{
        paddingHorizontal:10,
    }
})
