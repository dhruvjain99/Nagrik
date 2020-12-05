import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LowerScreen from './components/eventScreen/lowerScreen.js';
import {headerBackgroundColor, headerShadowColor} from './components/commons/cssVariables';
import ProfileScreen from './components/profileScreen/index.js';
import TabNavigation from './components/tabNavigation/index.js';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:null,
        headerStyle:{
          backgroundColor: headerBackgroundColor,
          shadowColor: headerShadowColor,
        }
        }}> 
        <Stack.Screen name="TabNavigation" component={TabNavigation}/>
        <Stack.Screen name="LowerScreen" component={LowerScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}