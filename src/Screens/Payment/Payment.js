import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from "./Header";
import ListProducts from "./ListProducts/ListProducts";

const Payment = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <ListProducts/>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})
