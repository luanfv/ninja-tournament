import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import {
  Competitors,
  Dashboard,
  Scoreboard,
  SelectedCompetitors,
} from '@src/pages';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="dashboard"
          component={gestureHandlerRootHOC(Dashboard)}
        />

        <Stack.Screen
          name="competitors"
          component={gestureHandlerRootHOC(Competitors)}
        />

        <Stack.Screen
          name="selectedCompetitors"
          component={gestureHandlerRootHOC(SelectedCompetitors)}
        />

        <Stack.Screen
          name="scoreboard"
          component={gestureHandlerRootHOC(Scoreboard)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Routes };
