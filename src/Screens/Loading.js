import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

import imgLoading from '../assets/image/loading.gif'
const Loading = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imgLoading}
                source={imgLoading}
            />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgLoading:{
        width:50,
        height:50,
        // backgroundColor: 'red',
        resizeMode: 'contain'
    },
})
