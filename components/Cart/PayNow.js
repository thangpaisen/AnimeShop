import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

export default function PayNow() {
    return (
        <View style={styles.payNowContainer}>
            <View style={styles.total}>
                <Text style={styles.totalTitle}>Thành tiền</Text>
                <Text style={styles.totalPrice}>123,456,000 đ</Text>
            </View>
            <TouchableOpacity style={styles.buttonTotal}>
                <Text style={styles.buttonTotalTitle}>Tiến hành đặt hàngg</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    payNowContainer:{
        // justifyContent:'space-around',
        backgroundColor: 'white',
        padding:20,
    },
    total:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:10,
        alignItems: 'center',
    },
    totalTitle:{
        fontSize: 14,
        color: 'gray',
    },
    totalPrice:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    buttonTotal:{
        alignItems: 'center',
        padding:12,
        backgroundColor: 'red',
        borderRadius:10,
    },
    buttonTotalTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }

})
