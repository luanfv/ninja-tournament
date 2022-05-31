import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CodePush from 'react-native-code-push';

import { theme } from './settings';
import { Routes } from './routes';

const App: React.FC = () => (
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

export default CodePush(App);
