import Toast from 'react-native-simple-toast';
import auth from '@react-native-firebase/auth';

export const setUser = (user)=>{
    return {
        type:'SET_USER',
        payload:user,
    }

}

export const loginUser = (email, password) => async (dispatch) => {
          await auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
              console.log('Signed ok');
              Toast.show('Đăng nhập thành công!');
              // dispatch(setUser(res.user))
            })
            .catch(error => {
              console.log('error111',`${error}`);
              Toast.show('Đăng nhập thất bại!');
            });
    }
export const registerUser =  (email, password) => async (dispatch) => {
            await auth().createUserWithEmailAndPassword(email, password)
          .then((res) => {
              console.log('create ok');
              Toast.show('Đăng kí thành công!');
              console.log(res);
            })
            .catch(error => {
              console.log(error);
              Toast.show('Đăng kí thất bại!');
            });
    }
export const logout =  () => async(dispatch) =>{
          await auth().signOut()
          .then(() => {
              console.log('signout ok');
            })
            .catch(error => {
              console.log(error);
              // ..
            });
    }