import React from 'react'
import { StyleSheet, Text, View,ScrollView} from 'react-native'
import Header from './Header'
import NewProducts from './NewProducts/NewProducts.js'
import HotSales from './HotSales/HotSales.js'
import Figures from './Figures/Figures.js'
const Home = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
            <Header/>
            <NewProducts/>
            <HotSales/>
            <Figures/>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})
