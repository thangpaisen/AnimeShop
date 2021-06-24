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
// import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import Description from './Description';
import SelectSwatch from './SelectSwatch';
import ListAction from './ListAction';
import Details from './Details';
import Comment from './Comment';
import ListImage from './ListImage';
export default function ProductDetails({route}) {
  // const navigation = useNavigation();
   const {item} = route.params;
   console.log(item);
  // const onchange=(nativeEvent)=>{
  //       if(nativeEvent)
  //       {
  //           const slide= nativeEvent.contentOffset.y
  //           //nativeEvent.contentOffset.x khỏag cách từ đầu scroll đến hình thứ 1,2,3... 
  //           //nativeEvent.layoutMeasurement.width chiều rộng của cái 
  //          console.log(slide)
  //       }
  //   }
  return (
    <>
      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false} 
        // onScroll={({nativeEvent})=>onchange(nativeEvent)}
          >
        <View style={styles.main}>
          <ListImage item={item}/>
          <Description item={item}/>
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
