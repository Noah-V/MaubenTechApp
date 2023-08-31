/* eslint-disable prettier/prettier */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './src/onbording Screens/firstScreen';
import SecondScreen from './src/onbording Screens/SecondScreen';

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="firstScreen"
          component={FirstScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{
            animation: 'slide_from_right',
            // headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
