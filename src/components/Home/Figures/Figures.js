import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import FigureItem from './FigureItem';
import {useSelector } from 'react-redux'
const Figures = () => {
  const navigation = useNavigation();
  const dataProducts = useSelector((state) => state.products);
  const result = dataProducts.filter ( ({ productType }) => productType === "Figures");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
            😍 FIGURE - MÔ HÌNH
          </Text>
        </View>
        <TouchableOpacity 
          style={styles.showAll}
          onPress={()=>navigation.navigate('ListProducts',{title:'😍 FIGURE - MÔ HÌNH',data:result})}
          >
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>All</Text>
          <Icon name="chevron-forward-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>
      {/* <FlatList
        data={data}
        renderItem={({item, index}) => <FigureItem item={item} />}
        keyExtractor={item => item.id}
      /> */}
      {
        result.map((item, index) =>   
            index<3?<FigureItem key={index} item={item} />:null
        )
      }
    </View>
  );
};

export default Figures;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    // backgroundColor:'blue'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ededed',
    borderTopWidth:2,
    borderTopColor: '#49d292',
  },
  headerTitle: {
    paddingVertical: 15,
    backgroundColor: '#49d292',
    paddingHorizontal: 10,
  },
  showAll: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor:'red',
  },
});
