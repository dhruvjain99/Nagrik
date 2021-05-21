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
                    <Ionicons name="md-image" size={30} color={fontGreen}/>
                    <Text style={styles.label}>My posts</Text>
                </View>
                <Ionicons name="ios-arrow-forward" size={30} color={displayNameColor}/>
            </View>
            <View style={styles.link}>
                <View style={styles.labelContainer}>
                    <Ionicons name="ios-help-circle" size={30} color={fontGreen}/>
                    <Text style={styles.label}>get support</Text>
                </View>
                <Ionicons name="ios-arrow-forward" size={30} color={displayNameColor}/>
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
        fontSize: 15,
        color: "#fff",
        letterSpacing: 1.5
    },
    labelContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
    }
});