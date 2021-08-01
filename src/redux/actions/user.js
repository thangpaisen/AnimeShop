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
            })
            .catch(error => {
              console.log(error.code);
              if(error.code==='auth/wrong-password')
                {
                  Toast.show('Đăng nhập thất bại! Email hoặc mật khẩu không đúng');
                }
              else if(error.code==='auth/network-request-failed')
                {
                  Toast.show('Đăng nhập thất bại! Kiểm tra kết nối Internet');
                }
                else if(error.code==='auth/user-not-found')
                {
                  Toast.show('Đăng nhập thất bại! Tài khoản không tồn tại');
                }
              else
                Toast.show('Đăng nhập thất bại! Lỗi không xác đinh thử lại sau..');
            });
    }
export const registerUser =  (name,email, password) => async (dispatch) => {
          await auth().createUserWithEmailAndPassword(email, password)
          .then((res) => {
              console.log('create ok');
              Toast.show('Đăng kí thành công!');
              dispatch(updateProfileUser(name));
              console.log(res);
            })
            .catch(error => {
              console.log(error.code);
              if(error.code==='auth/email-already-in-use')
                {
                  Toast.show('Đăng ký thất bại! Email đã được sử dụng');
                }
              else if(error.code==='auth/network-request-failed')
                {
                  Toast.show('Đăng ký thất bại! Kiểm tra kết nối Internet');
                }
              else
                Toast.show('Đăng kí thất bại! lỗi gì đó thử lại sau');
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
export const logoutUser = () => async dispatch => {
  try {
    await auth().signOut();
  } catch (e) {
    console.error(e);
  }
};

export const updateProfileUser = name => async dispatch => {
  try {
    await auth()
      .currentUser.updateProfile({
        displayName: name,
      })
      .then(() => {
        const user = auth().currentUser;
        dispatch(setUser(user));
      });
  } catch (e) {
    console.error(e);
  }
};