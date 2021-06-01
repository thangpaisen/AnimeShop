import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Product from './Product'
const data=[
    {
        id:1,
        title:'Móc khóa mica anime Kimetsu no Yaiba',
        image:'https://product.hstatic.net/1000273792/product/0_53512bfb57584c98baa4a8bbe5f725d0_large.jpg',
        price:55000,
        sale:0,
        rate:5,
        sold:69,
    },
{
        id:2,
        title:'Móc khóa mica anime Kimetsu no Yaiba',
        image:'https://product.hstatic.net/1000273792/product/0_53512bfb57584c98baa4a8bbe5f725d0_large.jpg',
        price:55000,
        sale:0,
        rate:5,
        sold:69,

    },
       {
        id:3,
        title:'Móc khóa mica anime Kimetsu no Yaiba',
        image:'https://product.hstatic.net/1000273792/product/0_53512bfb57584c98baa4a8bbe5f725d0_large.jpg',
        price:55000,
        sale:0,
        rate:5,
        sold:69,

    },
{
        id:4,
        title:'Móc khóa mica anime Kimetsu no Yaiba',
        image:'https://product.hstatic.net/1000273792/product/0_53512bfb57584c98baa4a8bbe5f725d0_large.jpg',
        price:55000,
        sale:0,
        rate:5,
        sold:69,

    },
]
const NewProducts = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>😍 HÀNG MỚI VỀ</Text>
                <TouchableOpacity style={styles.showAll}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>All</Text>
                    <Icon name="chevron-forward-outline" size={20} color="black"/>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                pagingEnabled
                data={data}
                renderItem={({item,index})=><Product item={item}/>}
                keyExtractor={(item) => item.id}
                />
            
        </View>
    )
}

export default NewProducts

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        padding:5,
        // backgroundColor:'red'
    },
    header:{
        padding:5,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTitle:{
        fontSize:16,
        fontWeight:'bold'
    },
    showAll:{
        flexDirection:'row',
        alignItems: 'center'
    },
})
