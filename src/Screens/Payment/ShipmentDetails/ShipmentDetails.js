import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
const ShipmentDetails = () => {
  const [info, setInfo] = useState({
    name: '',
    sdt: '',
    address: '',
  });
  const [messageErrorName, setMessageErrorName] = useState('');
  const [messageErrorSdt, setMessageErrorSdt] = useState('');
  const [messageErrorAddress, setMessageErrorAddress] = useState('');
  const handleOnPayNow = () => {
    console.log('ok');
    if(info.name.trim().length<1)
       setMessageErrorName('Vui lòng nhập Họ Tên')
        if(info.sdt.trim().length<1)
       setMessageErrorSdt('Vui lòng nhập Số điện thoại')
       if(info.address.trim().length<1)
       setMessageErrorAddress('Vui lòng nhập địa chỉ') 
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông tin giao hàng</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Họ và tên"
        value={info.name}
        onChangeText={text =>
          {
              setInfo({
            ...info,
            name: text,
          })
          setMessageErrorName('')
          }
        }
      />
      <Text style={styles.messageError}>{messageErrorName}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Số điện thoại "
        value={info.sdt}
        onChangeText={text =>
          {
              setInfo({
            ...info,
            sdt: text,
          })
          setMessageErrorSdt('')
          }
        }
      />
      <Text style={styles.messageError}>{messageErrorSdt}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Địa chỉ"
        value={info.address}
        onChangeText={text =>
          {
              setInfo({
            ...info,
            address: text,
          })
          setMessageErrorAddress('Vui lòng nhập địa chỉ')
          } 
        }
      />
      <Text style={styles.messageError}>{messageErrorAddress}</Text>

      <Button
        onPress={() => handleOnPayNow()}
        buttonStyle={styles.buttonPay}
        titleStyle={styles.buttonPayTitle}
        title={'Tiến hàng đặt hàng'}
      />
    </View>
  );
};

export default ShipmentDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    color: '#000',
    paddingBottom: 20,
  },
  textInput: {
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
    borderWidth: 0.5,
    borderColor: '#888',
  },
  buttonPay: {
    marginBottom:10,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#09bff2',
  },
  buttonPayTitle: {

    fontSize: 16,
  },
  messageError: {
    paddingLeft: 2,
    paddingVertical: 2,
    fontSize: 12,
    color: 'red',
  },
});
