import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './Header'
import NewProducts from './NewProducts/NewProducts.js'
const Home = () => {
    return (
        <View>
            <Header/>
            <NewProducts/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
