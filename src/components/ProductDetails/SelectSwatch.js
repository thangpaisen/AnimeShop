import React,{useState} from 'react'
import { StyleSheet, Text, View ,Pressable,} from 'react-native'

export default function SelectSwatch(props) {
    // const [selected, setSelected] = useState(0)
    const {models,selected,setSelected} = props
    return (
        <View style={styles.selectSwatch}>
            <View style={styles.headerSelect}>
              <Text style={styles.textHeaderSelect}>Chọn mẫu</Text>
            </View>
            <View style={styles.selectList}>
            {
              models.map((item,index) => 
                <Pressable 
                  key={index}
                  style={[styles.selectItem,index===selected && styles.selectItemActive]}
                  onPress={()=>setSelected(index)}
                  >
                  <Text style={styles.textItem}>{item}</Text>
                </Pressable>
              )
            }
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
    padding: 6,
    borderWidth: 0.4,
    borderColor: '#999',
    borderRadius: 4,
    backgroundColor:'white'
  },
  selectItemActive:{
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
  },
  textItem: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
})
