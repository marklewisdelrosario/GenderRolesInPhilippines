import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Understanding from './pages/Understanding';
import History from './pages/History';
import Contemporary from './pages/Contemporary';
import Issues from './pages/Issues';
import Multimedia from './pages/Multimedia';
import Analysis from './pages/Analysis';
import Conclusion from './pages/Conclusion';
import References from './pages/References';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#102F49',
          },

          headerTintColor: '#FFFFFF',

          headerTitleStyle: {
            fontWeight: '800',
          },

          headerBackTitle: 'Back',
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Gender Roles PH',
          }}
        />

        <Stack.Screen
          name="Understanding"
          component={Understanding}
          options={{
            title: 'Understanding Gender Roles',
          }}
        />

        <Stack.Screen
          name="History"
          component={History}
          options={{
            title: 'Historical Perspective',
          }}
        />

        <Stack.Screen
          name="Contemporary"
          component={Contemporary}
          options={{
            title: 'Contemporary Gender Roles',
          }}
        />

        <Stack.Screen
          name="Issues"
          component={Issues}
          options={{
            title: 'Gender Issues & Realities',
          }}
        />

        <Stack.Screen
          name="Multimedia"
          component={Multimedia}
          options={{
            title: 'Multimedia',
          }}
        />

        <Stack.Screen
          name="Analysis"
          component={Analysis}
          options={{
            title: 'Analysis & Reflection',
          }}
        />

        <Stack.Screen
          name="Conclusion"
          component={Conclusion}
          options={{
            title: 'Conclusion',
          }}
        />

        <Stack.Screen
          name="References"
          component={References}
          options={{
            title: 'References',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}