import React, { Fragment } from 'react';
import { View, SafeAreaView, Image }from 'react-native';
import { SocialIcon } from 'react-native-elements'
import * as Google from 'expo-google-app-auth';
import * as SecureStore from 'expo-secure-store';
import { CommonActions, useNavigation} from '@react-navigation/native';
import { backgroundBodyColor } from '../commons/cssVariables';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen(){
    const navigation = useNavigation();
    async function clickHandler() { 
        try {
            let config = {
                androidClientId: '292178739884-hkk7m98strihhm0340eu991krpgl48q5.apps.googleusercontent.com',
                iosClientId: '292178739884-sii8s0kt2pvln721o06u4fgctgnqk2tn.apps.googleusercontent.com'
            }
            let googleLoginResult = await Google.logInAsync(config);  
            
            if(googleLoginResult['type'] == 'success'){
                console.log(googleLoginResult);
                let loginResponse = await fetch('https://nagrik-backend.herokuapp.com/login', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "idToken": googleLoginResult.idToken
                    }),
                });
                let responseJson = await loginResponse.json();
                console.log(responseJson);
                await SecureStore.setItemAsync("token", responseJson["data"]["token"]);
                navigation.navigate('TabNavigation');
                navigation.dispatch(state => {
                    // Remove the Login route from the stack
                    const routes = state.routes.filter(r => {
                        r.params = {userID: googleLoginResult.user.id};
                        return r.name !== 'Login';
                    });
                    
                    return CommonActions.reset({
                      ...state,
                      routes,
                      index: routes.length - 1,
                    });
                });
            } else {
                console.log("Sign in with google failed. Please try again!")
            }
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <Fragment>
            <StatusBar style="light"></StatusBar>
            <SafeAreaView style={{flex: 1, backgroundColor: backgroundBodyColor, display: "flex", justifyContent:"center", alignItems: "center", flexDirection: "column"}}>
                <Image source={require('../../assets/NAGRIK.gif')} style={{height: 250, width: 250, marginBottom:20}}></Image>
                <View style={{width: '60%', height: "35%"}}>
                    <SocialIcon title='Sign in with Google' type='google'  button onPress={clickHandler} />
                </View>
            </SafeAreaView>
        </Fragment>
    );
}

