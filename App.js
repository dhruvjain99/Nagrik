import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {headerBackgroundColor, headerShadowColor} from './components/commons/cssVariables';
import ProfileScreen from './components/profileScreen/index.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: headerBackgroundColor,
          shadowColor: headerShadowColor,
        }
        }}> 
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title: ""}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}