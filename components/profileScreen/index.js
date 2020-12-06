import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import backgroundStyle from '../commons/backgroundStyle';
import Profile from './profile';
import Redirect from './redirect';
import SocialConnect from './socialConnect';
import Footer from './footer';
import { useFocusEffect } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

export default function ProfileScreen({userID}){
    const [user, setUser] = React.useState({name: "", friends: 0, communities: 0});
    useFocusEffect(
        React.useCallback(() => {
            async function fetchUser() {
                const token = await SecureStore.getItemAsync('token');
                const response = await fetch('https://nagrik-backend.herokuapp.com/users/profile', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    },
                });
                let responseJson = await response.json();
                console.log(responseJson['data']);
                setUser(responseJson['data']);
            }
            fetchUser();
        }, [userID])
    );
    return (
        <SafeAreaView style={backgroundStyle.container}>
            <ScrollView style={backgroundStyle.scrollView} indicatorStyle="white">
                <Profile user={user}/>
                <Redirect />
                <SocialConnect />
                <Footer />
            </ScrollView>
        </SafeAreaView>
    );
}
