import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
export default function ListImage({item}) {
    const [imageActive, setImageActive] = useState(0)
    const listImage = item.image;
    const onchange=(nativeEvent)=>{
        if(nativeEvent)
        {
            const slide= Math.floor(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width)
            //nativeEvent.contentOffset.x khỏag cách từ đầu scroll đến hình thứ 1,2,3... 
            //nativeEvent.layoutMeasurement.width chiều rộng của cái 
            if(slide!==imageActive)
                setImageActive(slide)
        }
    }
    return (
        <View>
            <ScrollView 
              horizontal 
              pagingEnabled
              onScroll={({nativeEvent})=>onchange(nativeEvent)}
              >
              {listImage.map((item, index) => (
                <Image key={index} style={styles.imageProduct} source={{uri: item}} />
              ))}
            </ScrollView>
            <View  style={styles.pagination}>
              {/* {listImage.map((item, index) =>(
                    <Text key={index} style={imageActive===index?styles.dotActive:styles.dot}>●</Text>      
              )
              )} */}
              <Text style={{color:'gray'}}>{imageActive+1}/{listImage.length}</Text>
            </View>
        </View>
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
  pagination:{
    position:'absolute',
    paddingHorizontal:8,
    paddingVertical:2,
    borderRadius:10,
    bottom: 6,
    right: 6,
    backgroundColor: '#fff'
  },
  // pagination:{
  //       position:'absolute',
  //       flexDirection: 'row',
  //       bottom: 0,
  //      c
  //       alignSelf: 'center'
  //   },
  //   dot:{
  //       fontSize:18,
  //       padding:2,
  //       color:'#c8c9c5'
  //   },
  //   dotActive:{
  //     fontSize:18,
  //       padding:2,
  //       color:'black'
  //   }
  
});

