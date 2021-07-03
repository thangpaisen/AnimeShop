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
              // dispatch(setUser(res.user))
            })
            .catch(error => {
              console.log('error111',`${error}`);
              return 'ahihi error'
              // ..
            });
    }
export const registerUser =  (email, password) => async (dispatch) => {
            await auth().createUserWithEmailAndPassword(email, password)
          .then((res) => {
              console.log('create ok');
              console.log(res);
            })
            .catch(error => {
              console.log(error);
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