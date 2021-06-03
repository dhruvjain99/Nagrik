import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import eventRecordingScreen from './components/createEventScreen/eventRecording.js';
import NonCovidPostView from './components/eventDisplay/NonCovidPostView.js';
import {headerBackgroundColor, headerShadowColor} from './components/commons/cssVariables';
import ProfileScreen from './components/profileScreen/index.js';
import TabNavigation from './components/tabNavigation/index.js'
import LoginScreen from './components/LoginScreen'
import CovidPostView from './components/eventDisplay/covidScreen'
import ContactView from './components/profileScreen/contactUs'
import MyPostView from './components/profileScreen/myPosts'
import MessageScreen from './components/chatScreen/messageScreen'
import ChatScreen from './components/chatScreen/chatScreen'
import EditPostScreen from './components/profileScreen/editMyPost.js';
import  SettingsScreen  from './components/settingsScreen/settings.js';
import nonCovidForm from './components/createEventScreen/NonCovidForm.js';
import { Ionicons } from '@expo/vector-icons';
import Covid from './components/createEventScreen/CovidForm.js';
import HospitalBeds from './components/createEventScreen/hospitalBeds.js';
import Description from './components/createEventScreen/description.js';
import CovidOptions from './components/createEventScreen/covidOptions.js';
import OxygenSupply from './components/createEventScreen/oxygenSupply.js';


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
        {/* <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} /> */}
        <Stack.Screen name="TabNavigation" options={{headerShown: false}} component={TabNavigation}/>
        <Stack.Screen name="Profile" options={{headerShown: true, title: 'My Profile', headerTintColor: '#fff', headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#fff'}}} component={ProfileScreen} />
        <Stack.Screen name="NonCovidPostView" options={{headerShown: false}} component={NonCovidPostView} /> 
        <Stack.Screen name="CovidPostView" options={{headerShown: true, title: 'COVID-19 Resources', headerTintColor: '#fff', headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#fff'}}} component={CovidPostView} />
        <Stack.Screen name="eventRecordingScreen" options={{headerShown: false}} component={eventRecordingScreen} />
        <Stack.Screen name="MyPosts" options={{headerShown: true, title: 'My Posts', headerTintColor: '#fff', headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#fff'}}} component={MyPostView} />
        <Stack.Screen name="Contact" options={{headerShown: true, title: 'Contact Us', headerTintColor: '#fff', headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#fff'}}} component={ContactView} />
        <Stack.Screen name="Chat" options={{headerShown: true, title: 'Chat', headerTintColor: '#fff', headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#fff'}}} component={ChatScreen} />
        <Stack.Screen name="Messages" options={{headerShown: true, title: 'All Messages', headerTintColor: '#fff', headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#fff'}}} component={MessageScreen} />
        <Stack.Screen name="EditPostScreen" options={{headerShown: true, title: 'Edit Post', headerTintColor: '#fff', headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#fff'}}} component={EditPostScreen} />
        <Stack.Screen name="Settings" options={{headerShown: true, title: 'Settings', headerTintColor: '#fff', headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#fff'}}} component={SettingsScreen} />
      
        <Stack.Screen name="newPost" options={{headerShown: true, title: 'New Post', headerTintColor: '#fff', headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#fff'}, headerLeft: ({canGoBack, onPress})=>(
          <Ionicons name="md-close"
                onPress={onPress}
                size={31} color="white" style={{paddingLeft: 20}}/>
       )}} component={nonCovidForm} />
       <Stack.Screen name="Covid" component={Covid} options={{headerShown: true, title: 'New Covid Post', headerTintColor: '#fff', headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#fff'}}}/>
          <Stack.Screen name="OxygenSupply" component={OxygenSupply} options={{headerShown: true, title: 'New Covid Post', headerTintColor: '#fff', headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#fff'}}}/> 
        <Stack.Screen name="Description" component={Description} options={{headerShown: true, title: 'New Covid Post', headerTintColor: '#fff', headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#fff'}}}/>
        <Stack.Screen name="CovidOptions" component={CovidOptions} options={{headerShown: true, title: 'New Covid Post', headerTintColor: '#fff', headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#fff'}}}/>
        <Stack.Screen name="HospitalBeds" component={HospitalBeds} options={{headerShown: true, title: 'New Covid Post', headerTintColor: '#fff', headerStyle: {backgroundColor: headerBackgroundColor}, headerTitleStyle: {color: '#fff'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}