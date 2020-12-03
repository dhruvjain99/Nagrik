import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LowerScreen from './components/eventScreen/lowerScreen.js';
import VideoScreen from './components/eventDisplay/videoScreen.js';
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
        }}>
        <Stack.Screen name="Video" component={VideoScreen} options={{title: ""}}/>
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{title: ""}}/>
        <Stack.Screen name="Screen" component={LowerScreen} options={{title: ""}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title: ""}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}