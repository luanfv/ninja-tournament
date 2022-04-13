import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';
import AppProvider from './hooks';
import { theme } from './settings/theme';

export default () => (
  <AppProvider>
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.black}
        barStyle="light-content"
      />

      <Routes />
    </ThemeProvider>
  </AppProvider>
);
