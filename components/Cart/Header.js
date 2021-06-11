import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Header() {
  return (
    <View style={styles.headerCart}>
      <View style={styles.back}>
        <Icon name="arrow-back-outline" size={24} color="white" />
      </View>
      <View style={styles.headerCartTile}>
        <Text style={styles.textHeaderCart}>Giỏ hàng</Text>
      </View>
      <View style={[styles.back, {backgroundColor: 'transparent'}]}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  back: {
    width: 32,
    height: 32,
    backgroundColor: 'gray',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeaderCart: {
    marginLeft: 10,
    fontSize: 18,
    color: 'black',
  },
});
