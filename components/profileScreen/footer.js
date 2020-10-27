import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { displayNameColor } from '../commons/cssVariables';
import {Ionicons} from '@expo/vector-icons';

export default function Footer(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>terms &amp; conditions</Text>
            <Text style={styles.text}>privacy policy</Text>
            <Text style={styles.text}>logout</Text>
            <Text style={[styles.text, styles.madeBy]}>made with &nbsp;<Ionicons name="md-heart" size={13} color="red"/>&nbsp; in India</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        width: '100%'
    },
    text: {
        color: displayNameColor,
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 25
    },
    madeBy: {
        marginTop: 20,
        marginBottom: 10
    }
});