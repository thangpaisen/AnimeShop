import {Avatar} from 'react-native-elements';
import React from 'react';
import {StyleSheet, Text, View, Pressable,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {deleteHistorySearch} from '../../redux/actions/historySearch';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {fetchProductsSearch} from '../../redux/actions/productsSearch';

const HistorySearch = () => {
    const navigation = useNavigation();
  const dispatch = useDispatch();
  const dataHistorySearch = useSelector(state => state.historySearch);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>History</Text>
        <TouchableOpacity onPress={() => dispatch(deleteHistorySearch())}>
          <Icon name="trash" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.listItemSearches}>
        {dataHistorySearch.map((item, index) => 
          <Pressable style={styles.itemSearch} key={index}
           onPress={() =>{
                        dispatch(fetchProductsSearch(item));
                        navigation.navigate('SearchProductsOK',{value:item})
                    }}
            >
            <Text style={styles.textSearch}>{item}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default HistorySearch;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItemSearches: {
    marginTop:4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemSearch: {
    marginRight: 10,
    marginTop: 12,
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: '#f7f0f0',
  },
  textSearch: {
    fontSize: 14,
  },
});
