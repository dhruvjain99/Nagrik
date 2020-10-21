import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import profile from './components/profileScreen/profile.js';
import {headerBackgroundColor, headerShadowColor} from './components/commons/cssVariables';
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
        <Stack.Screen name="Profile" component={profile} options={{title: ""}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}