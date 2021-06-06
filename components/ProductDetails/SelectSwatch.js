import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SelectSwatch() {
    return (
        <View style={styles.selectSwatch}>
            <View style={styles.headerSelect}>
              <Text style={styles.textHeaderSelect}>Chọn mẫu</Text>
            </View>
            <View style={styles.selectList}>
              <View style={styles.selectItem}>
                <Text style={styles.textItem}>Lôi</Text>
              </View>
              <View style={[styles.selectItem,styles.selectItemActive]}>
                <Text style={styles.textItem}>Thủy</Text>
              </View>
              <View style={styles.selectItem}>
                <Text style={styles.textItem}>Phong</Text>
              </View>
              <View style={styles.selectItem}>
                <Text style={styles.textItem}>Nham</Text>
              </View>
              <View style={styles.selectItem}>
                <Text style={styles.textItem}>Băng</Text>
              </View>
              <View style={styles.selectItem}>
                <Text style={styles.textItem}>Thảo</Text>
              </View>
            </View>
          </View>
    )
}

const styles = StyleSheet.create({
      selectSwatch: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  headerSelect: {

  },
  textHeaderSelect: {
    fontSize: 16,
  },
  selectList: {
    // marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectItem: {
    marginRight: 10,
    marginTop: 10,
    padding: 8,
    borderWidth: 0.4,
    borderColor: '#999',
    
    borderRadius: 6,
    elevation:1,
    backgroundColor:'white'
  },
  selectItemActive:{
    borderWidth: 2,
    borderColor: 'red',
  },
  textItem: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
})
