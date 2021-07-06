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
  Alert 
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

import Modal from 'react-native-modal';

export default function ProductDetails({route}) {
  // const navigation = useNavigation();
   const {item} = route.params;
   const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <Header />
      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false} 
          >
        <View style={styles.main}>
          <ListImage item={item}/>
          <Description item={item}/>
          <SelectSwatch />
          <Details/>
          <Comment/>
        </View>
      </ScrollView>
      <ListAction product={item} />
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
