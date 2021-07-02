import React from 'react'
import { StyleSheet, Text, View ,Dimensions,Image} from 'react-native'
// import PagerView from 'react-native-pager-view';
export default function ListImage({item}) {
    return (
        <View>
            <Image
            style={styles.imageProduct}
            source={{
              // uri: 'https://cf.shopee.vn/file/52435a1cc52a5e38a00eed1da5f77080',
              uri: item.image
            }}
          />
        </View>
    // <PagerView style={styles.pagerView} initialPage={0} showPageIndicator={true}>
    //   <View key="1">
    //     <Text>First page</Text>
    //   </View>
    //   <View key="2">
    //     <Text>Second page</Text>
    //   </View>
    // </PagerView>
    )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  imageProduct: {
    width: windowWidth,
    height: windowWidth,
    resizeMode: 'stretch',
    // backgroundColor: 'green',
  },
// pagerView: {
//     width: windowWidth,
//     height: windowWidth,
//   },
  
});

