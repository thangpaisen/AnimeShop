import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
const data = [
  {
    id: 1,
    image:
      'http://theme.hstatic.net/1000273792/1000446123/14/slider_item_1_image.jpg?v=230',
  },
  {
    id: 2,
    image:
      'http://theme.hstatic.net/1000273792/1000446123/14/slider_item_2_image.jpg?v=230',
  },
  {
    id: 3,
    image:
      'http://theme.hstatic.net/1000273792/1000446123/14/slider_item_3_image.jpg?v=230',
  },
];
const SlideShow = () => {
    const [imageActive, setImageActive] = useState(0)
    const onchange=(nativeEvent)=>{
        if(nativeEvent)
        {
            const slide= Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width)
            //nativeEvent.contentOffset.x khỏag cách từ đầu scroll đến hình thứ 1,2,3... 
            //nativeEvent.layoutMeasurement.width chiều rộng của cái 
            if(slide!==imageActive)
                setImageActive(slide)
        }
    }
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        pagingEnabled
        onScroll={({nativeEvent})=>onchange(nativeEvent)}
        >
        {data.map((item, index) => (
          <Image key={index} style={styles.image} source={{uri: item.image}} />
        ))}
      </ScrollView>
        <View  style={styles.pagination}>
        {data.map((item, index) => (
            <>
                {
                imageActive==index
                ?<Text key={item} style={styles.dot}>⚫</Text>
                :<Text key={item} style={styles.dot}>⚪</Text>
                }
            </>
        ))}
        </View>
    </View>
  );
};

export default SlideShow;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WIDTH_IMAGE = (windowWidth - 30) / 2;
const styles = StyleSheet.create({
  container: {},
  image: {
    width: windowWidth,
    height: (windowWidth / 1167) * 510,
    resizeMode: 'stretch',
  },
  pagination:{
      position:'absolute',
      flexDirection: 'row',
      bottom: 0,
      alignSelf: 'center'
  },
  dot:{
      fontSize:8,
      padding:2,
  }
});
