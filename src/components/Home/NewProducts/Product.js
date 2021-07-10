import {formatNumber} from '../../../utils';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  Pressable,
} from 'react-native';
import {Rating} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const Product = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('ProductDetails', {item})}
      style={styles.container}>
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
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
        <Text style={styles.ratting}>
          <Rating
            imageSize={16}
            readonly
            startingValue={5}
            style={styles.ratting}
          />
        </Text>
        <Text style={styles.sold}>({item.sold})</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.currentPrice}>{formatNumber(item.priceNew)} đ</Text>
        {item.sale !== 0 ? (
          <Text style={styles.parentPrice}>{formatNumber(item.price)} đ</Text>
        ) : null}
      </View>
    </Pressable>
  );
};

export default Product;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WIDTH_IMAGE = (windowWidth - 30) / 2;
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: 'white',
    width: (windowWidth - 30) / 2,
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
    elevation: 1,
    justifyContent: 'space-between'
  },
  image: {
    // backgroundColor:'green',
    width: WIDTH_IMAGE,
    height: WIDTH_IMAGE,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  iconSale: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: WIDTH_IMAGE / 3,
    height: WIDTH_IMAGE / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sale: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  currentPrice: {
    padding: 5,
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  parentPrice: {
    padding: 5,
    color: '#999',
    fontSize: 12,
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
  },
  ratting: {},
});
