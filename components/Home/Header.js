import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.headerSearch}>
                <Icon name="search-outline" size={24} color="#999"/>
                <Text style={styles.textSearch}>Bạn tìm gì hôm nay?</Text>
            </View>
            <Icon style={styles.cart} name="cart-outline" size={26} color="white"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:"#09bff2",
        paddingVertical:8,
        alignItems:'center',
    },
    headerSearch:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        paddingHorizontal:10,
        marginLeft:10,
        borderRadius:5,
    },
    textSearch:{
        color:"#999",
        fontSize:16,
        padding:10,
    },
    cart:{
        paddingHorizontal:10,
    }
})
