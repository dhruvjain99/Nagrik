import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../profileScreen/index.js';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Event() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Event!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

let flag = true;

export default function TabNavigation() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'md-home';
            } else if (route.name === 'Feed') {
              iconName = 'ios-flash';
            } else if (route.name === 'Notifications') {
              iconName = 'ios-notifications';
            }else if (route.name === 'Event') {
              iconName = 'ios-add-circle';
            }else if (route.name === 'Settings') {
              iconName = 'md-settings';
              flag = false;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          inactiveTintColor: 'darkgray',
          activeTintColor: 'white',
          showLabel: false,
          activeBackgroundColor: 'dimgray',
          inactiveBackgroundColor: 'dimgray',
          tabBarVisible: flag,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Event" component={Event} />
        <Tab.Screen name='Notifications' component={Notifications} />
        <Tab.Screen name="Settings" component={ProfileScreen} />
      </Tab.Navigator>
  );
}
