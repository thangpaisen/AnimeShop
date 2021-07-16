import React from 'react'
import { StyleSheet, Text, View,Dimensions,Image,Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {useSelector } from 'react-redux'

const CategoryItem = ({item}) => {
    const navigation = useNavigation();
    const  dataProducts = useSelector(state => state.products);
    const result = dataProducts.filter ( ({ productType }) => productType === item.CategoryId);
    return (
        <Pressable 
            style={styles.container}
            onPress={()=>navigation.navigate('ListProducts',{title:item.CategoryTitle, data:result})}
            > 
            <Image 
                style={styles.image}
                source={{uri:item.CategoryImage}}
            />
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{item.CategoryTitle}</Text>
        </Pressable>
    )
}

export default CategoryItem

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WIDTH_CONTAINER = (windowWidth-50) /4 
const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        width:WIDTH_CONTAINER,
        // backgroundColor:'red',
        margin:5,
        alignItems: 'center',
    },
    image: {
        width:WIDTH_CONTAINER-20,
        height:WIDTH_CONTAINER-20,
        borderRadius:99999,
        // backgroundColor:'blue',
        resizeMode:'stretch'
    },
    title:{
        paddingVertical:10,
        fontSize:12,
        textAlign:'center'
    }
})
