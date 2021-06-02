import React from 'react';
import { StyleSheet, View,Linking  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Sectionbreak from '../commons/sectionbreak';

export default function SocialConnect(){
    return (
        <View style={styles.container}>
            <Sectionbreak/>
            <View style={styles.logoContainer}> 
                <Ionicons name="logo-facebook" size={27} color="white" onPress={ ()=> Linking.openURL('https://www.facebook.com/Nagrik-App-101645075478013') }/>
                <Ionicons name="logo-twitter" size={27} color="white" onPress={ ()=> Linking.openURL('https://twitter.com/AppNagrik') }/>
                <Ionicons name="logo-instagram" size={27} color="white" onPress={ ()=> Linking.openURL('https://www.instagram.com/nagrik.app/') }/>
                <Ionicons name="logo-youtube" size={27} color="white" onPress={ ()=> Linking.openURL('https://www.youtube.com/channel/UC6-S0dwlYPldsgTKan7M0RA') }/>
            </View>
            <Sectionbreak />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        flexWrap: "nowrap",
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "nowrap",
        justifyContent: 'space-evenly',
        width: '100%'
    }
});