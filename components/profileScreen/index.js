import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import backgroundStyle from '../commons/backgroundStyle';
import Profile from './profile';
import Redirect from './redirect';
import SocialConnect from './socialConnect';

export default function ProfileScreen(){
    return (
        <SafeAreaView style={backgroundStyle.container}>
            <ScrollView style={backgroundStyle.scrollView} indicatorStyle="white">
                <Profile />
                <Redirect />
                <SocialConnect />
            </ScrollView>
        </SafeAreaView>
    );
}
