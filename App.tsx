import React from 'react';
import {enableScreens} from 'react-native-screens';
import {Navigator} from './src/navigation/Navigator';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';

enableScreens();

const App = () => {
  return (
    <SafeAreaProvider>
      <FlashMessage position="top" />
      <Navigator />
    </SafeAreaProvider>
  );
};

export default App;
