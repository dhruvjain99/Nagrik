import React from 'react';
import {StyleSheet, View} from 'react-native';
import { headerBackgroundColor } from './cssVariables';

export default function Sectionbreak(){
    return (
        <View style={styles.container}></View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '92%',
        borderWidth: 0.8,
        borderColor: headerBackgroundColor,
        marginVertical: 25,
    }
});