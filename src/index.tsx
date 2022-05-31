import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';
import { ThemeProvider } from 'styled-components';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CodePush from 'react-native-code-push';

import { theme } from './settings';
import { Routes } from './routes';

const App: React.FC = () => {
  useEffect(() => {
    const user = auth().currentUser;

    if (!user) {
      auth().signInAnonymously();
    }
  }, []);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor={theme.colors.primary}
          barStyle="light-content"
        />

        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default CodePush(App);
