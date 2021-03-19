import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import {Loading} from './components';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import {LogBox} from 'react-native';

const MainApp = () => {
  const stateGlobal = useSelector((state) => state);
  LogBox.ignoreLogs(['Setting a timer']);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Loading />}
    </>
  );
};

const App = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);

export default App;
