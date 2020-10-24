import React from 'react';
import {View} from 'react-native';
import backgroundStyle from '../commons/backgroundStyle';
import Profile from './profile';
export default function ProfileScreen(){
    return (
        <View style={backgroundStyle.container}>
            <Profile />
        </View>
    );
}
