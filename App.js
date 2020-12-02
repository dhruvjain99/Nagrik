import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LowerScreen from './components/eventScreen/lowerScreen.js';

import {headerBackgroundColor, headerShadowColor} from './components/commons/cssVariables';
import ProfileScreen from './components/profileScreen/index.js';
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
<<<<<<< HEAD
        }}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{title: ""}}/>
=======
        }}> 
        <Stack.Screen name="Screen" component={LowerScreen} options={{title: ""}}/>
>>>>>>> 737e058c40864da2ac7f54c023ea5b166f94a56a
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title: ""}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}