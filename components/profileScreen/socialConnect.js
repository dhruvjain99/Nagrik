import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Sectionbreak from '../commons/sectionbreak';

export default function SocialConnect(){
    return (
        <View style={styles.container}>
            <Sectionbreak/>
            <View style={styles.logoContainer}> 
                <Ionicons name="logo-facebook" size={27} color="white"/>
                <Ionicons name="logo-twitter" size={27} color="white"/>
                <Ionicons name="logo-instagram" size={27} color="white"/>
                <Ionicons name="logo-twitch" size={27} color="white"/>
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