import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CategoryItem from './CategoryItem';
import {useSelector} from 'react-redux';
import Loading from '../../../Screens/Loading';
const Categories = () => {
  const dataCategories = useSelector(state => state.categories.data);
  const loading = useSelector(state => state.categories.loading);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>😍 DANH MỤC SẢN PHẨM</Text>
      </View>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          horizontal
          data={dataCategories}
          renderItem={({item, index}) => <CategoryItem item={item} />}
          keyExtractor={item => item._id}
        />
      )}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 5,
    // backgroundColor:'red'
  },
  header: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
