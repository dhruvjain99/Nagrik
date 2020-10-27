import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { displayNameColor, fontGreen } from '../commons/cssVariables';
import Sectionbreak from '../commons/sectionbreak';

export default function Redirect(){
    return (
        <View style={styles.container}>
            <View style={styles.link}>
                <View style={styles.labelContainer}>
                    <Ionicons name="ios-person-add" size={32} color={fontGreen}/>
                    <Text style={styles.label}>add friends</Text>
                </View>
                <Ionicons name="ios-arrow-forward" size={32} color={displayNameColor}/>
            </View>
            <View style={styles.link}>
                <View style={styles.labelContainer}>
                    <Ionicons name="ios-settings" size={32} color={fontGreen}/>
                    <Text style={styles.label}>app settings</Text>
                </View>
                <Ionicons name="ios-arrow-forward" size={32} color={displayNameColor}/>
            </View>
            <View style={styles.link}>
                <View style={styles.labelContainer}>
                    <Ionicons name="ios-help-circle" size={31} color={fontGreen}/>
                    <Text style={styles.label}>get support</Text>
                </View>
                <Ionicons name="ios-arrow-forward" size={32} color={displayNameColor}/>
            </View>
            <Sectionbreak/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: "nowrap",
        alignItems: "center"
    },
    link: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "nowrap",
        justifyContent: 'space-between',
        marginBottom: 20
    },
    label: {
        marginLeft: 12,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 17,
        color: "#fff",
        letterSpacing: 1.8
    },
    labelContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
    }
});