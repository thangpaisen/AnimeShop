import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Button,
  Pressable,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import Header from './Header';
import Description from './Description';
import SelectSwatch from './SelectSwatch';
import ListAction from './ListAction';
import Details from './Details';
import Comment from './Comment';
import ListImage from './ListImage';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/actions/cart';

export default function ProductDetails({route}) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
  const {item} = route.params;
  // const [isModalVisible, setModalVisible] = useState(false);
  const [heightScroll, setHeightScroll] = useState(0);
  const handleOnAddToCart = () => {
    dispatch(addToCart(item, 1, item.models[selected]));
    Toast.show({
      text1: 'Đã thêm vào giỏ hàng',
      visibilityTime: 100,
    });
  };
  const onchange=(nativeEvent)=>{
        if(nativeEvent)
        {
            const slide=nativeEvent.contentOffset.y
            //nativeEvent.contentOffset.x khỏag cách từ đầu scroll đến hình thứ 1,2,3... 
            //nativeEvent.layoutMeasurement.width chiều rộng của cái 
           setHeightScroll(slide);
        }
    }
  return (
    <>
      <Header title={item.title} heightScroll={heightScroll} />
      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false}
        onScroll={({nativeEvent})=>onchange(nativeEvent)}
         >
        <View style={styles.main}>
          <ListImage item={item} />
          <Description item={item} />
          {item.models.length !== 0 && (
            <SelectSwatch
              models={item.models}
              selected={selected}
              setSelected={setSelected}
            />
          )}
          <Details item={item} />
          <Comment />
        </View>
      </ScrollView>
      <ListAction product={item} handleOnAddToCart={handleOnAddToCart} />
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
