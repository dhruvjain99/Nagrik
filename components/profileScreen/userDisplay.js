import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { backgroundBodyColor, displayNameColor, displayNameSize, displayPhotoSize, headerBackgroundColor } from '../commons/cssVariables';

export default function UserDisplay(props){
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/user.png')} style={styles.displayPhoto}/>
            <Text style={styles.displayName}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    displayPhoto: {
        width: displayPhotoSize,
        height: displayPhotoSize,
        borderRadius: 100,
        overflow: "hidden",
        borderWidth: 9,
        borderColor: backgroundBodyColor
    },
    displayName: {
        color: displayNameColor,
        fontSize: displayNameSize,
        fontWeight: 'bold',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
  });