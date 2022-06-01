import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Home, Tournament, TournamentScore } from '@src/pages';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={gestureHandlerRootHOC(Home)} />

        <Stack.Screen
          name="tournament"
          component={gestureHandlerRootHOC(Tournament)}
        />

        <Stack.Screen
          name="tournamentScore"
          component={gestureHandlerRootHOC(TournamentScore)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Routes };
