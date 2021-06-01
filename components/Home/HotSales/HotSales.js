import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Product from '../NewProducts/Product'
const data=[
    {
        id:1,
        title:'Khẩu trang anime Tokyo Ghoul - Ken Kaneki (có dây kéo) ',
        image:'https://product.hstatic.net/1000273792/product/86a_96bc805a3aa947c194691192b14cc13d_large.jpg',
        price:55000,
        sale:99,
        rate:5,
        sold:69,
    },
{
        id:2,
        title:'Dây chuyền anime Attack on Titan - Mẫu 3 ',
        image:'https://product.hstatic.net/1000273792/product/z1_97735c4113e74912b3935225b9b2f6c9_large.jpg',
        price:59000,
        sale:99,
        rate:5,
        sold:69,

    },
       {
        id:3,
        title:'Móc khóa mica anime Kimetsu no Yaiba',
        image:'https://product.hstatic.net/1000273792/product/0_53512bfb57584c98baa4a8bbe5f725d0_large.jpg',
        price:79000,
        sale:99,
        rate:5,
        sold:69,

    },
{
        id:4,
        title:'Móc khóa mica anime Kimetsu no Yaiba',
        image:'https://product.hstatic.net/1000273792/product/0_53512bfb57584c98baa4a8bbe5f725d0_large.jpg',
        price:100000,
        sale:99,
        rate:5,
        sold:69,

    },
]
const HotSales = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>😍 KHUYẾN MÃI SIÊU HOT!!!</Text>
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

export default HotSales

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        padding:5,
        // backgroundColor:'blue'
    },
    header:{
        padding:5,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
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
