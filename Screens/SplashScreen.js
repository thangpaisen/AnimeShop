import React,{ useEffect, useState } from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import Logo2 from '../assets/image/logo2.png'

import Loading from '../assets/image/loading.gif'
import Loading2 from '../assets/image/tenor.gif'
import * as Animatable from 'react-native-animatable';
import NetInfo from "@react-native-community/netinfo";
import NetworkError from './NetworkError'
export default function SplashScreen() {
    const [netStatus, setNet] = useState(true)
    useEffect(() => {
        NetInfo.addEventListener(state => {
        setNet(state.isConnected)
        })
        return () => {
            
        }
    })
    return (
        <View style={styles.container}>
             {!netStatus && <NetworkError />}
            <Animatable.Image
            animation="bounce"
            iterationCount={9999} direction="alternate"
                style={styles.logo}
                source={Logo2}
            />
            <Image
                style={styles.loading}
                source={Loading}
            />
            {/* <Image
                style={styles.image3}
                source={Loading2}
            />
            <Image
                style={styles.image4}
                source={Loading2}
            /> */}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    logo:{
        width:150,
        height:150,
        resizeMode: 'contain'
    },
    loading:{
        width:50,
        height:50,
        // backgroundColor: 'red',
        resizeMode: 'contain'
    },
    image3:{
        position: 'absolute',
        bottom:0,
        right:0,
        width:80,
        height:80,
        resizeMode: 'contain'
    },
    image4:{
        position: 'absolute',
        bottom:0,
        left:0,
        width:80,
        height:80,
        resizeMode: 'contain'
    },


})
