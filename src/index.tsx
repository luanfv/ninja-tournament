import React from 'react';
import { StatusBar } from 'react-native';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';
import { queryClient } from './settings/queryClient';
import { theme } from './settings/theme';

export default () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.black}
        barStyle="light-content"
      />

      <Routes />
    </ThemeProvider>
  </QueryClientProvider>
);
