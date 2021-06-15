import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {Input,Button} from 'react-native-elements'
import image from '../assets/image/logo3.png'
import Icon from 'react-native-vector-icons/Ionicons';
export default function LoginScreen() {
    return (
        <View style={styles.loginContainer}>
            <View style={styles.header}>
                <Image 
                    style={styles.image} 
                    source={image}
                    />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerTitle}>
                    Welcome AnimeShop
                </Text>
                <Text style={styles.footerTitle2}>
                    Đăng nhập tài khoản
                </Text>
                <View style={styles.action}>
                    <Input
                        label="User Name"
                        labelStyle={{fontWeight: '500',fontSize: 16}}
                        placeholder="Nhập username vào...."
                        leftIcon={<Icon name="person" size={20} color='gray'/>}
                        rightIcon={<Icon name="chevron-down-circle-outline" size={20} color='green'/>}

                        style={{fontSize:18,borderWidth:0,borderBottomColor:'transparent'}}
                        // containerStyle={{backgroundColor:'red'}}
                        inputContainerStyle={{borderBottomWidth:0.5}}
                        errorStyle={{ color: 'red',marginLeft:0}}
                        // errorMessage='Nhập username vào bạn ơi...'
                        />
                    <Input
                        label="Password"
                        labelStyle={{fontWeight: '500',fontSize: 16}}
                        placeholder="Nhập Password vào...."
                        leftIcon={<Icon name="lock-closed" size={20} color='gray'/>}
                        rightIcon={<Icon name="eye-off" size={20} color='gray'/>}
                        style={{fontSize:18,borderWidth:0,borderBottomColor:'transparent'}}
                        // containerStyle={{backgroundColor:'red'}}
                        inputContainerStyle={{borderBottomWidth:0.5}}
                        errorStyle={{ color: 'red',marginLeft:0}}
                        // errorMessage='Nhập Password vào bạn ơi...'
                        />
                </View>
                <Button
                    title="Login"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        flex: 1,
        backgroundColor:'orange',
    },
    header:{
        flex: 1,
        
    },
    image: {
        width:150,
        height: 150 / 487 * 522,
        resizeMode: 'contain',
        // backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
        left: 0,

    },
    footer:{
        flex: 2,
        backgroundColor: 'white',
        padding:30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },
    footerTitle:{
        marginTop:10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    footerTitle2:{
        color:'gray',
    },
    action:{
        marginTop:40,
    },
})
