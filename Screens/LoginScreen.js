import React from 'react';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import {Input, Button, SocialIcon} from 'react-native-elements';
import image from '../assets/image/logo3.png';
import logo2 from '../assets/image/logo2.png';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
export default function LoginScreen({navigation}) {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.main}>   
        <Text style={styles.footerTitle}>Welcome AnimeShop</Text>
        <Text style={styles.footerTitle2}>Đăng nhập tài khoản</Text>
        <View style={styles.action}>
          <Input
            label="User Name"
            labelStyle={{fontWeight: '500', fontSize: 16}}
            placeholder="Nhập username vào...."
            leftIcon={<Icon name="person" size={20} color="gray" />}
            rightIcon={
              <Icon
                name="chevron-down-circle-outline"
                size={20}
                color="green"
              />
            }
            style={{
              fontSize: 18,
              borderWidth: 0,
              borderBottomColor: 'transparent',
            }}
            // containerStyle={{backgroundColor:'red'}}
            inputContainerStyle={{borderBottomWidth: 0.5}}
            errorStyle={{color: 'red', marginLeft: 0}}
            errorMessage=''
          />
          <Input
            label="Password"
            secureTextEntry={true}
            labelStyle={{fontWeight: '500', fontSize: 16}}
            placeholder="Nhập Password vào...."
            leftIcon={<Icon name="lock-closed" size={20} color="gray" />}
            rightIcon={<Icon name="eye-off" size={20} color="gray" />}
            style={{
              fontSize: 18,
              borderWidth: 0,
              borderBottomColor: 'transparent',
            }}
            // containerStyle={{backgroundColor:'red'}}
            inputContainerStyle={{borderBottomWidth: 0.5}}
            errorStyle={{color: 'red', marginLeft: 0}}
            errorMessage=''
          />
        </View>
          <Button
          title="Đăng nhập"
          containerStyle={{borderRadius: 20,marginHorizontal:20,backgroundColor: '#09bff2'}}
          ViewComponent={LinearGradient} 
          linearGradientProps={{
            colors:['#09bff2', '#218bd9', '#218bd9']
          }}
          onPress={()=>navigation.replace('TabMenu')}
          // buttonStyle={{borderRadius:20}}
        />
        <View style={styles.signup}>
            <Text style={{fontSize: 14}} >
                Bạn chưa có tài khoản?
            </Text>
            <TouchableOpacity 
              onPress={()=>navigation.navigate('SignupScreen')}
            >
                <Text style={styles.signupNow}>Đăng kí ngay</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#5cfff2',
    // backgroundColor: 'white',
    justifyContent: 'center',
    
  },
  main: {
    backgroundColor: 'white',
    padding: 10,
    paddingVertical:30,
    justifyContent: 'center',
    // paddingHorizontal: 20,
    marginHorizontal:20,
    borderRadius:20,
    elevation:5
  },
  footerTitle: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerTitle2: {
    color: 'gray',
    textAlign: 'center',
  },
  action: {
    marginTop: 40,
  },
  loginUsingMedia:{
    //   backgroundColor: 'red',
      flexDirection: 'row',
      justifyContent: 'center',
  },
  signup:{
      padding:10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  signupNow:{
      fontSize: 14, fontWeight: 'bold', color:'#1394f0',
       textDecorationLine: 'underline',
       paddingHorizontal: 10,
  }
});
