import * as React from 'react';
import { Text, View, SafeAreaView, Switch} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../homeScreen/index.js';
import {displayNameColor, headerBackgroundColor} from '../commons/cssVariables';
import UpperScreen from '../eventScreen/upperScreen.js';
import backgroundStyle from '../commons/backgroundStyle';
import { useNavigation } from '@react-navigation/native';

function Feed() {
  return (
    <React.Fragment>
      <SafeAreaView style={backgroundStyle.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style= {{ color: 'white'}}>Feed screen coming soon!</Text>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
}

function SettingsScreen() {
  return (
    <React.Fragment>
      <SafeAreaView style={backgroundStyle.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style= {{ color: 'white'}}>Settings screen coming soon!</Text>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
}


const Tab = createBottomTabNavigator();

export default function TabNavigation(props) {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
      <Tab.Navigator
        screenOptions={({ navigation, route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'md-home';
            }
              else if (route.name === 'Feed') {
              iconName = 'ios-flash';
            }
              else if (route.name === 'COVID-19') {
              return <View><Switch
              trackColor={{ false: "#767577", true: "red" }}
              thumbColor={isEnabled ? "white" : "white"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              />              
              {/* <Text style={{ color: "white", textAlign:"center", textAlignVertical:"bottom", fontSize: 8 }}>COVID-19</Text> */}
              </View>
            }
              else if (route.name === 'Post') {
              iconName = 'ios-add-circle';
            }
              else if (route.name === 'Settings') {
              iconName = 'md-settings';
            }
            return <Ionicons name={iconName} size={29} color={color} />;
          }
        })}

        tabBarOptions={{
          inactiveTintColor: displayNameColor,
          activeTintColor: 'white',
          showLabel: true,
          activeBackgroundColor: headerBackgroundColor,
          inactiveBackgroundColor: headerBackgroundColor,
          style: {
            backgroundColor: 'black',
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} navigationOptions={{header: null}}/>
        <Tab.Screen name="Post" component={UpperScreen} />
        <Tab.Screen name="COVID-19" component={HomeScreen} listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          }
        }} />
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Settings" component={SettingsScreen} /> 
      </Tab.Navigator>
  );
}
