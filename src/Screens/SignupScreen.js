import React,{useContext,useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Input, Button, SocialIcon} from 'react-native-elements';
import image from '../assets/image/logo3.png';
import logo2 from '../assets/image/logo2.png';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import {AuthContext} from '../navigation/AuthProvider';
import {useDispatch} from 'react-redux';
import {registerUser} from '../redux/actions/user'

export default function SignupScreen({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  
  const [confirmPassword, setConfirmPassword] = useState();

  // const {register} = useContext(AuthContext);
  const dispatch = useDispatch()

  return (
    <View style={styles.loginContainer}>
      <View style={styles.main}>
        <Text style={styles.footerTitle}>Welcome AnimeShop</Text>
        <Text style={styles.footerTitle2}>Đăng kí tài khoản</Text>
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
            // containerStyle={{backgroundColor:'red'}}
            inputContainerStyle={{borderBottomWidth: 0.5}}
            errorStyle={{color: 'red', marginLeft: 0}}
             errorMessage=''
             onChangeText={setEmail}
          />
          <Input
            label="Password"
            secureTextEntry={false}
            labelStyle={{fontWeight: '500', fontSize: 16}}
            placeholder="Nhập Password vào...."
            leftIcon={<Icon name="lock-closed" size={20} color="gray" />}
            rightIcon={<Icon name="eye-off" size={20} color="gray" />}
            // containerStyle={{backgroundColor:'red'}}
            inputContainerStyle={{borderBottomWidth: 0.5}}
            errorStyle={{color: 'red', marginLeft: 0}}
            errorMessage=''
             onChangeText={setPassword}

          />
        </View>
        <Button
          title="Đăng ký"
          titleStyle={{color:'#333'}}
          containerStyle={{
            borderRadius: 20,
            marginHorizontal: 10,
          }}
          buttonStyle={{backgroundColor: '#5cfff2'}}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            start:{x: 0, y: 0},
            end:{x: 1, y: 0},
            colors:['#5cfff2', '#09d6c6']
          }}
          onPress={()=>{
            console.log(email,password);
            dispatch(registerUser(email,password));
            // navigation.navigate('LoginScreen')
          }}
        />
        <View style={styles.signup}>
          <Text style={{fontSize: 14}}>Bạn đã có tài khoản?</Text>
          <TouchableOpacity
            onPress={()=>navigation.navigate('LoginScreen')}
          >
            <Text style={styles.signupNow}>Đăng nhập ngay</Text>
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
    justifyContent: 'center',
  },
  main: {
    backgroundColor: 'white',
    padding: 10,
    paddingVertical: 30,
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 20,
    elevation: 5,
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
  loginUsingMedia: {
    //   backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signup: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupNow: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1394f0',
    textDecorationLine: 'underline',
    paddingHorizontal: 10,
  },
});
