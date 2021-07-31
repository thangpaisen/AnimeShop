import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {fetchProductsSearch} from '../../redux/actions/productsSearch';
import {useDispatch} from 'react-redux'
const Header = ({value}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
  return (
    <View style={styles.container}>
            <Pressable 
                style={styles.containerSearch}
                    onPress={()=>{
                        navigation.navigate('SearchProducts');
                        dispatch(fetchProductsSearch('@'))
                    }}
                >
                <Icon style={{ padding: 5 }} name="search-outline" size={25} color="#000" />
                <TextInput
                    editable={false}
                    value={value}
                    style={{ flex: 1, paddingVertical: 5, fontFamily: 'Nunito-Bold', }}>
                </TextInput>
            </Pressable>
            <Pressable
                onPress={()=>{
                    navigation.navigate('SearchProducts');
                    dispatch(fetchProductsSearch('@'))
                }}
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
    containerSearch: {
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
