import React from 'react'
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import { Rating } from 'react-native-elements';
import 'intl';
import 'intl/locale-data/jsonp/en';
import icon from './icon.png'
const Product = ({item}) => {
    console.log( typeof
    item.price.toLocaleString()
    );
    const currentPrice = Intl.NumberFormat().format(item.price);
    const parentPrice = Intl.NumberFormat().format(item.price - item.price *item.sale);
    return (
        <View style={styles.container}>
           <Image
                style={styles.image}
                source={{
                uri: 'https://product.hstatic.net/1000273792/product/0_53512bfb57584c98baa4a8bbe5f725d0_large.jpg',
                }}
           />
            <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title}>{item.title}</Text>
           <View style={{flexDirection: 'row',alignItems: 'center',marginTop:5,}}>
                <Text style={styles.ratting}>
                    <Rating imageSize={16} readonly startingValue={5} style={styles.rating} />
                </Text>
                <Text style={styles.ratting}>
                        ({item.sold})
                </Text>
           </View>
           <View style={styles.price}>
                <Text style={styles.currentPrice}>{currentPrice} đ</Text>
                <Text style={styles.parentPrice}>{parentPrice} đ</Text>
           </View> 
        </View>
    )
}

export default Product

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        backgroundColor:'white',
        width:(windowWidth-30) /2,
        alignItems: 'center',
        marginHorizontal:5,
        borderRadius:5,
                elevation:1
    },
    image:{
        // backgroundColor:'green',
        width:(windowWidth-30) /2,
        height:(windowWidth-30) /2,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,

    },
    title:{
        textAlign:'center',
        marginTop:10,
        paddingHorizontal:10,
        fontSize:18,
    },
    price:{
        flexDirection:'row',
        alignItems: 'center',
        marginBottom:10,

    },
    currentPrice:{
        padding:5,
        color:'red',
        fontSize:16,
        fontWeight:'bold'
    },
    parentPrice:{
        padding:5,
        color:'#999',
        fontSize:12,
        textDecorationLine: 'line-through'
         
    },
    ratting:{
    }
 
})
