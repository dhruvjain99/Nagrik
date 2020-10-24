import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { displayNameColor } from '../commons/cssVariables';

export default function PostCountDisplay(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.value}>0</Text>
                <Text style={styles.label}>total</Text>
            </View>
            <View>
                <Text style={styles.value}>0</Text>
                <Text style={styles.label}>verified</Text>
            </View>
            <View>
                <Text style={styles.value}>0</Text>
                <Text style={styles.label}>views</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
    },
    value: {
        color: '#459135',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "center"
    },
    label: {
        color: displayNameColor,
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 2,
        textTransform: "uppercase"
    }
});