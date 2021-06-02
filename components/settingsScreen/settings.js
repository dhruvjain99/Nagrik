import React, { Fragment, } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Switch } from 'react-native';
import {headerBackgroundColor, displayNameColor} from '../commons/cssVariables'
export default function SettingScreen(){

    const [isEnabled1, setIsEnabled1] = React.useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const [isEnabled2, setIsEnabled2] = React.useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const [isEnabled3, setIsEnabled3] = React.useState(false);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
            

    return (
        <Fragment>
            <SafeAreaView style={styles.container}>
                <View style={styles.headerItem}>
                <Text style={styles.header}> Notifications </Text>
                </View>
                <View>
                <View style={styles.listItem}>
                    <Text style={styles.list}> Community updates </Text>
                    <Switch
                    trackColor={{ false: "#767577", true: "#459135" }}
                    thumbColor={isEnabled1 ? "white" : "white"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                    />    
                    </View>                    
                    <View style={styles.listItem}>
                    <Text style={styles.list}> Neighbourhood broadcast updates </Text>
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
            </SafeAreaView>
        </Fragment>
    );
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: headerBackgroundColor,
            padding: 5,
          },
        header:{
            fontSize: 24,
            color: '#bac0cc',
            padding: 5,
            paddingLeft: 15,
            paddingTop: 15,
            marginBottom: 5,
            

        },
        list:{
            fontSize: 20,
            color: 'grey',
        
            
        },
        listItem:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,

        },
        headerItem:{
            borderBottomWidth: 0.2,
            borderColor: 'white',

        },
    }
)