import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LowerScreen from './components/eventScreen/lowerScreen.js';

import {headerBackgroundColor, headerShadowColor} from './components/commons/cssVariables';
import ProfileScreen from './components/profileScreen/index.js';
import HomeScreen from './components/homeScreen/index.js';
import EventScreen from './components/eventScreen/index.js';

import TabNavigation from './components/tabNavigation/index.js'


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
        {/* <Stack.Screen name="Event" component={EventScreen} options={{title: ""}}/> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{title: ""}}/> */}
        {/* }}> */}
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{title: ""}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: ""}}/>
        <Stack.Screen name="LowerScreen" component={LowerScreen} options={{title: ""}}/>
        <Stack.Screen name="Event" component={EventScreen} options={{title: ""}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title: ""}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}