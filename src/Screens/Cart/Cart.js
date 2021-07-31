import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
  FlatList,
  Modal
} from 'react-native';
import Header from './Header';
import CartItem from './CartItem';
import PayNow from './PayNow';
import {
  deleteProductToCart,
} from '../../redux/actions/cart';
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
   const [modalVisible, setModalVisible] = useState(false);
   const [itemDelTmp, setItemDelTmp] = useState({});
   const handleOnPressDelete=(product,model) => {
    setItemDelTmp({
      product,
      model
    })
    setModalVisible(true);
}
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
            renderItem={({item, index}) => <CartItem item={item} handleOnPressDelete={handleOnPressDelete}/>}
            keyExtractor={(item, index) => index}
          />
          <PayNow />
        </>
      )}
      <Modal
        // animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>👋 Notification</Text>
            <Text style={styles.modalText2}>You sure want to delete</Text>
            <View style={styles.options}>
            <Pressable
              style={[styles.button, styles.buttonNo]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>🖖No</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonYes]}
              onPress={() => {
                setModalVisible(!modalVisible);
                dispatch(deleteProductToCart(itemDelTmp.product,itemDelTmp.model));
              }}
            >
              <Text style={styles.textStyle}>👌Yes</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    // paddingVertical:25,
    alignItems: "center",
    elevation: 5
  },
  options: {
    flexDirection: 'row',
  },
  button: {
    margin:10,
    borderRadius: 15,
    padding: 8,
    paddingHorizontal: 25,
    elevation: 2
  },
  buttonNo: {
    backgroundColor: "#2196F3",
  },
  buttonYes: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom:10,
    textAlign: "center"
  },
  modalText2: {
    fontSize: 14,
    paddingBottom:10,
    textAlign: "center"
  }
});
