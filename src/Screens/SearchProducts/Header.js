import React,{useState} from 'react';
import {StyleSheet, Text, View, Pressable, TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import {Input,SearchBar} from 'react-native-elements';
const Header = () => {
    const navigation = useNavigation();
    const [value, onChangeText] = useState('')
  return (
    <View style={styles.container}>
            <View style={styles.contaiSearch}>
                <Icon style={{ padding: 5 }} name="search-outline" size={25} color="#000" />
                <TextInput
                    // underlineColorAndroid='transparent'
                    onChangeText={onChangeText}
                    value={value}
                    // multiline
                    // blurOnSubmit
                    // onSubmitEditing={_Onhandlersubmit}
                    style={{ flex: 1, paddingVertical: 5, fontFamily: 'Nunito-Bold', }} placeholder="Bạn tìm gì hôm nay?"></TextInput>
                {
                    value !== '' ? (
                        <TouchableOpacity
                            onPress={() => {
                                onChangeText('')
                                // setistoggle(true)
                            }}
                        >
                            <Icon style={{ padding: 5 }} name="close-outline" size={15} color="#000" />
                        </TouchableOpacity>
                    ) : null
                }
            </View>
            <Pressable
                onPress={()=>navigation.goBack()}
            >
                <Text style={styles.txtCancel}>Cancel</Text>
            </Pressable>
        </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor:'#09bff2'

    },
    contaiSearch: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 10,
        marginRight: 10,
        borderRadius: 5,
    },
    txtCancel: { textAlign: 'center', color: '#000' }
});
