import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClientProvider } from 'react-query';

import { Routes } from './routes';
import { Providers } from './hooks';
import { queryClient, theme } from './settings';

export default () => (
  // eslint-disable-next-line react-native/no-inline-styles
  <GestureHandlerRootView style={{ flex: 1 }}>
    <QueryClientProvider client={queryClient}>
      <Providers>
        <ThemeProvider theme={theme}>
          <StatusBar
            backgroundColor={theme.colors.primary}
            barStyle="light-content"
          />

          <Routes />
        </ThemeProvider>
      </Providers>
    </QueryClientProvider>
  </GestureHandlerRootView>
);
