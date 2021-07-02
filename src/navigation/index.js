
import React,{useEffect, useState} from 'react'
import Routes from './Routes';
import { AuthProvider } from './AuthProvider';
import SplashScreen from '../Screens/SplashScreen';
import { Provider } from 'react-redux'
import store from '../redux/store';
const Providers = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false)
    },2000)
  }, [])
  return (
    <Provider store={store}> 
      {isLoading? <SplashScreen/>:<Routes />}
    </Provider>
  );
}

export default Providers;