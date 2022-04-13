import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';
import { Providers } from './hooks';
import { theme } from './settings/theme';

export default () => (
  <Providers>
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.black}
        barStyle="light-content"
      />

      <Routes />
    </ThemeProvider>
  </Providers>
);
