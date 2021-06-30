import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
//   const [isFirstLaunch, setIsFirstLaunch] = useState(null);
//   let routeName;

//   useEffect(() => {
//     AsyncStorage.getItem('alreadyLaunched').then((value) => {
//       if (value == null) {
//         AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
//         setIsFirstLaunch(true);
//       } else {
//         setIsFirstLaunch(false);
//       }
//     }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  
//     GoogleSignin.configure({
//       webClientId: 'YOUR_APP_WEB_CLIENT_ID',
//     });
  
//   }, []);

//   if (isFirstLaunch === null) {
//     return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
//   } else if (isFirstLaunch == true) {
//     routeName = 'Onboarding';
//   } else {
//     routeName = 'Login';
//   }

  return (
    <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}>  
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
  );
};

export default AuthStack;