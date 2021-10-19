import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import Header from "./Header";
import ListProducts from "./ListProducts/ListProducts";
import ShipmentDetails from "./ShipmentDetails/ShipmentDetails";

const Payment = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ListProducts/>
                <ShipmentDetails/>
            </ScrollView>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})
