import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
const data=[
    {
        id:1,
        title:'thangquan1'
    },
        {
        id:2,
        title:'thangquan2'
    }
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
                data={data}
                renderItem={({item,index})=><Text>alo</Text>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default NewProducts

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        padding:10,
        // backgroundColor:'red'
    },
    header:{
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
    }
})
