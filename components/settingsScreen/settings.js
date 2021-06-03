import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Switch } from 'react-native';
import {headerBackgroundColor} from '../commons/cssVariables';
import backgroundStyle from '../commons/backgroundStyle';
import { ScrollView } from 'react-native-gesture-handler';

export default function SettingScreen(){

    const [isEnabled1, setIsEnabled1] = React.useState(true);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const [isEnabled2, setIsEnabled2] = React.useState(true);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const [isEnabled3, setIsEnabled3] = React.useState(true);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
            

    return (
        <SafeAreaView style={backgroundStyle.container}>
            <ScrollView style={backgroundStyle.scrollView}>
                <View style={styles.headerItem}>
                    <Text style={styles.header}> Notifications </Text>
                </View>
                <View>
                    <View style={styles.listItem}>
                        <Text style={styles.list}> City updates </Text>
                        <Switch
                        trackColor={{ false: "#767577", true: "#459135" }}
                        thumbColor={isEnabled1 ? "white" : "white"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                        />    
                    </View>                    
                    <View style={styles.listItem}>
                        <Text style={styles.list}> Neighbourhood updates </Text>
                        <Switch
                        trackColor={{ false: "#767577", true: "#459135" }}
                        thumbColor={isEnabled2 ? "white" : "white"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch2}
                        value={isEnabled2}
                        />    
                    </View>                    
                    <View style={styles.listItem}>
                        <Text style={styles.list}> Emergency contacts updates </Text>
                        <Switch
                        trackColor={{ false: "#767577", true: "#459135" }}
                        thumbColor={isEnabled3 ? "white" : "white"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch3}
                        value={isEnabled3}
                        />    
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create(
    {
        header:{
            fontSize: 19,
            color: 'white',
            marginBottom: 5,
            fontWeight: "400",
            marginTop: 12
        },
        list:{
            fontSize: 17,
            color: 'white',
        
            
        },
        listItem:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,

        },
        headerItem: {
            width: '92%',
            borderBottomWidth: 0.8,
            borderBottomColor: headerBackgroundColor,
            paddingBottom: 4,
            padding: 5,
            marginLeft: 15,
            paddingTop: 15,
            marginBottom: 7
        }
    }
)