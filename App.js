import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import profile from './components/profileScreen/profile.js';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor: '#262626'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
        }}> 
        <Stack.Screen name="Profile" component={profile} options={{title: ""}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}