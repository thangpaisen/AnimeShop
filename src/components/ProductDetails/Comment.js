import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Comment() {
    return (
        <View style={styles.commentContainer}>
            <Text style={styles.header}>Chưa có đánh giá</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    commentContainer:{
        marginTop: 10,
        marginBottom: 52,
        paddingHorizontal:10,
        backgroundColor: 'white'
    },
    header:{
        paddingVertical: 10,
        fontSize: 16,
    }
})
