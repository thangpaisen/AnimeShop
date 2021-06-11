import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import Description from './Description';
import SelectSwatch from './SelectSwatch';
import ListAction from './ListAction';
import Details from './Details';
import Comment from './Comment';
export default function ProductDetails() {
  const onchange=(nativeEvent)=>{
        if(nativeEvent)
        {
            const slide= nativeEvent.contentOffset.y
            //nativeEvent.contentOffset.x khỏag cách từ đầu scroll đến hình thứ 1,2,3... 
            //nativeEvent.layoutMeasurement.width chiều rộng của cái 
           console.log(slide)
        }
    }
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} onScroll={({nativeEvent})=>onchange(nativeEvent)}>
        <View style={styles.main}>
          <Image
            style={styles.imageProduct}
            source={{
              // uri: 'https://cf.shopee.vn/file/52435a1cc52a5e38a00eed1da5f77080',
              uri: 'https://product.hstatic.net/1000273792/product/z1_97735c4113e74912b3935225b9b2f6c9_large.jpg',
            }}
          />
          <Description />
          <SelectSwatch />
          <Details/>
          <Comment/>
        </View>
      </ScrollView>
      <Header />
      <ListAction/>
    </>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#efefef',
  },

  imageProduct: {
    width: windowWidth,
    height: windowWidth,
    resizeMode: 'stretch',
    // backgroundColor: 'green',
  },

  
});
