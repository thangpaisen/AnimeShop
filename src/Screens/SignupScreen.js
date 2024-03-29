import React,{useContext,useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity,ImageBackground,StatusBar,Pressable} from 'react-native';
import {Input, Button, SocialIcon} from 'react-native-elements';
import image from '../assets/image/logo3.png';
import logo2 from '../assets/image/logo2.png';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import imgBr from '../assets/image/t4.png';

import {AuthContext} from '../navigation/AuthProvider';
import {useDispatch} from 'react-redux';
import {registerUser} from '../redux/actions/user'

const  validateEmail =(email)=> {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export default function SignupScreen({navigation}) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessageName, setErrorMessageName] = useState('');

  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const handleOnPressLogin =() =>{
        if(name.length<6)
          setErrorMessageName('Name is a required field')
        if(!validateEmail(email))
          setErrorMessageEmail('Email must be a valid email')
        if(password.length<6)
          setErrorMessagePassword('Password must be at least 6 characters')
        if(validateEmail(email) && password.length>=6 && name.length>=6)
         dispatch(registerUser(name,email,password))
  }
  return (
    <ImageBackground  style={styles.loginContainer} source={imgBr} resizeMode="cover">
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
      <View style={{flex:2}}></View>
      <Animatable.View style={styles.main} animation="fadeInUp">   
        <View style={styles.title}>
          <Text style={styles.footerTitle}>Create an account</Text>
          <Text style={styles.footerTitle2}>Đăng ký tài khoản</Text>
        </View>
        <View style={styles.action}>
        <Input
            label="Name"
            labelStyle={{fontWeight: '500', fontSize: 16}}
            placeholder="Nhập tên vào...."
            leftIcon={<Icon name="person" size={20} color="gray" />}
            style={{
              fontSize: 16,
              borderWidth: 0,
              borderBottomColor: 'transparent',
            }}
            inputContainerStyle={{borderBottomWidth: 0.5}}
            errorStyle={{color: 'red', marginLeft: 0}}
            errorMessage={errorMessageName}
            onChangeText={(text) => {
              setName(text);
              setErrorMessageName('');
            }}
          />
          <Input
            label="Email"
            labelStyle={{fontWeight: '500', fontSize: 16}}
            placeholder="Nhập Email vào...."
            leftIcon={<Icon name="mail" size={20} color="gray" />}
            style={{
              fontSize: 16,
              borderWidth: 0,
              borderBottomColor: 'transparent',
            }}
            inputContainerStyle={{borderBottomWidth: 0.5}}
            errorStyle={{color: 'red', marginLeft: 0}}
            errorMessage={errorMessageEmail}
            onChangeText={(text) => {
              setEmail(text);
              setErrorMessageEmail('');
            }}
          />
          <Input
            label="Password"
            secureTextEntry={secureTextEntry}
            labelStyle={{fontWeight: '500', fontSize: 16}}
            placeholder="Nhập Password vào...."
            leftIcon={<Icon name="lock-closed" size={20} color="gray" />}
            rightIcon={<Pressable onPress={()=>setSecureTextEntry(!secureTextEntry)}>
                  <Icon name={secureTextEntry?"eye-off-outline":"eye-outline"} size={20} color="gray" />
                </Pressable>
              }
            style={{
              fontSize: 16,
              borderWidth: 0,
              borderBottomColor: 'transparent',
            }}
            inputContainerStyle={{borderBottomWidth: 0.5}}
            errorStyle={{color: 'red', marginLeft: 0}}
            errorMessage={errorMessagePassword}
            onChangeText={(text) => {
              setPassword(text);
              setErrorMessagePassword('');
            }}
          />
          
        </View>
        <Button
          title="Đăng ký"
          titleStyle={{color:'#333'}}
          containerStyle={{borderRadius: 20,marginHorizontal:10,}}
          buttonStyle={{backgroundColor: '#5cfff2'}}
          ViewComponent={LinearGradient} 
          linearGradientProps={{
            start:{x: 0, y: 0},
            end:{x: 1, y: 0},
            colors:['#5cfff2', '#09d6c6']
          }}
          onPress={()=>{
             handleOnPressLogin();
            }}
        />
        <View style={styles.signup}>
            <Text style={{fontSize: 14}} >
                Bạn đã có tài khoản?
            </Text>
            <TouchableOpacity 
              onPress={()=>navigation.navigate('LoginScreen')}
            >
                <Text style={styles.signupNow}>Đăng nhập ngay</Text>
            </TouchableOpacity>
        </View>
      </Animatable.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    
  },
  main: {
    flex: 5,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    elevation:1,
    justifyContent: 'space-between',
  },
  title:{
    marginTop:20,
  },
  footerTitle: {
    marginLeft:10,
    fontSize: 24,
    fontWeight: 'bold',
    // textAlign: 'center',
  },
  footerTitle2: {
    paddingVertical:10,
    marginLeft:10,
    color: 'gray',
    // textAlign: 'center',
  },
  action: {
    // marginTop: 40,
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
