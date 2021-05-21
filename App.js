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
import ContactView from './components/profileScreen/contactUs'
import MyPostView from './components/profileScreen/myPosts'
import MessageScreen from './components/chatScreen/messageScreen'
import ChatScreen from './components/chatScreen/chatScreen'

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
        <Stack.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
        <Stack.Screen name="Video" options={{headerShown: false}} component={Bottom} /> 
        <Stack.Screen name="CovidPostView" options={{title: 'COVID-19 Resources', headerShown: true, headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#FFFFFF', textAlign: 'center'} }} component={CovidPostView} />
        <Stack.Screen name="TabNavigation" options={{headerShown: false}} component={TabNavigation}/>
        <Stack.Screen name="LowerScreen" options={{headerShown: false}} component={LowerScreen} />
        <Stack.Screen name="MyPosts" options={{headerShown: false}} component={MyPostView} />
        <Stack.Screen name="Contact" options={{headerShown: false}} component={ContactView} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Messages" component={MessageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}