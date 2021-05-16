import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LowerScreen from './components/eventScreen/lowerScreen.js';
import Bottom from './components/eventDisplay/bottomSheet.js';
import {headerBackgroundColor, headerShadowColor} from './components/commons/cssVariables';
import ProfileScreen from './components/profileScreen/index.js';
import TabNavigation from './components/tabNavigation/index.js'
import LoginScreen from './components/LoginScreen'
import CovidPostView from './components/eventDisplay/covidScreen'

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
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="CovidPostView" options={{title: 'COVID-19 Resources', headerShown: true, headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#FFFFFF', textAlign: 'center'} }} component={CovidPostView} />
        <Stack.Screen name="TabNavigation" options={{headerShown: false}} component={TabNavigation}/>
        <Stack.Screen name="LowerScreen" options={{headerShown: false}} component={LowerScreen} />
        <Stack.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
        <Stack.Screen name="Video" options={{headerShown: false}} component={Bottom} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}