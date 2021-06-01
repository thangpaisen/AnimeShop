import React from 'react'
import { StyleSheet, Text, View,ScrollView} from 'react-native'
import Header from './Header'
import NewProducts from './NewProducts/NewProducts.js'
import HotSales from './HotSales/HotSales.js'
import Figures from './Figures/Figures.js'
import SlideShow from './SlideShow'

const Home = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
            <Header/>
            <SlideShow/>
            <NewProducts/>
            <HotSales/>
            <Figures/>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})
