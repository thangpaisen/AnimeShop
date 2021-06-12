import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function ListAction() {
  return (
    <View style={styles.listAction}>
      <TouchableOpacity style={styles.addCart}>
        <Icon style={styles.icon} name="cart" size={24} color="white" />
        <Text style={styles.title}>THÊM VÀO GIỎ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  //action
  listAction: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addCart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#49d292',
    marginHorizontal: 20,
    borderRadius:10,
    padding: 10,
  },
  icon: {},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 10,
  },
});
