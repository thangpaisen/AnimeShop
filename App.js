
import React from 'react';
import Toast from 'react-native-toast-message';
import Providers from './src/navigation';

const App = () => {
  return (
    <>
      <Providers />
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

export default App;
