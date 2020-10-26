import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

import Routes from './src/routes';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent />
      <Routes />
    </SafeAreaView>
  );
};

export default App;
