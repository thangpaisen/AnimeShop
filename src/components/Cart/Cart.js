import React,{useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import Header from './Header';
import CartItem from './CartItem';
import PayNow from './PayNow';
import {useDispatch, useSelector} from 'react-redux';
const NoProductCart = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Không có sản phẩm nào</Text>
    </View>
  );
};
export default function Cart() {
  const dispatch = useDispatch();
  const dataCart = useSelector(state => state.cart);
  return (
    <View style={styles.cartContainer}>
      <Header />
      {dataCart.length === 0 ? (
        <NoProductCart />
        ) : (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dataCart}
            renderItem={({item, index}) => <CartItem item={item} />}
            keyExtractor={(item, index) => index}
          />
          <PayNow />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
});
