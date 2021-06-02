import React from 'react'
import { StyleSheet, Text, View,Image,Dimensions,ImageBackground } from 'react-native'
import { Rating } from 'react-native-elements';
import 'intl';
import 'intl/locale-data/jsonp/en';
const Product = ({item}) => {
    // console.log( typeof
    // item.price.toLocaleString()
    // );
    const currentPrice = Intl.NumberFormat().format(item.price - item.price *item.sale/100);
    const parentPrice = Intl.NumberFormat().format(item.price);
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        {item.sale !== 0 ? (
          <ImageBackground
            style={styles.iconSale}
            source={{
              uri: 'https://theme.hstatic.net/1000273792/1000446123/14/iconsale.png',
            }}>
            <Text style={styles.sale}>- {item.sale}%</Text>
          </ImageBackground>
        ) : null}
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {item.title}
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <Text style={styles.ratting}>
            <Rating
              imageSize={16}
              readonly
              startingValue={5}
              style={styles.rating}
            />
          </Text>
          <Text style={styles.sold}>({item.sold})</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.currentPrice}>{currentPrice} đ</Text>
          {item.sale !== 0 ? (
            <Text style={styles.parentPrice}>{parentPrice} đ</Text>
          ) : null}
        </View>
      </View>
    );
}

export default Product

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WIDTH_IMAGE = (windowWidth-30) /2;
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
        width:WIDTH_IMAGE,
        height:WIDTH_IMAGE,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,

    },
    iconSale:{
        position:'absolute',
        top:0,
        right:0,
        width:WIDTH_IMAGE /3,
        height:WIDTH_IMAGE /3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sale:{
        color:'white',
        fontWeight:'bold',
    },
    title:{
        textAlign:'center',
        marginTop:10,
        paddingHorizontal:10,
        fontSize:16,
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
        textDecorationLine: 'line-through',
        fontStyle:'italic',
    },
    ratting:{
    }
 
})
