import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements';
export default function Settings() {
    return (
        <View style={styles.container}>
                <View style={styles.profile}>
                    <Avatar 
                        size={65}
                        rounded
                        source={{
                            uri:
                            'https://images6.alphacoders.com/102/1029037.jpg',
                        }}
                        containerStyle={styles.imageAvatar}
                        />
                    <View style={styles.profileTitle}>
                        <Text style={styles.fullName}>❤ Nguyễn Hữu Thắng</Text>
                        <Text style={styles.username}>@ThangPaisen</Text>
                    </View>
                    
                </View>
                <View style={styles.listOption}>

                    </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    profile:{
        // justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:50,
        paddingVertical:20,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
        // backgroundColor:'blue'
    },
    imageAvatar:{
        marginLeft: 20,
        elevation:5,
    },
    profileTitle:{
        padding: 10,
        // justifyContent:'space-between',
        // backgroundColor: 'red'
    },
    fullName:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    username:{
        color: 'gray'
    },
    listOption:{
        marginTop:20,
        padding:20,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
    }
})
