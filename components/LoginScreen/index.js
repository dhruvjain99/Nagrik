import React from 'react';
import { View, SafeAreaView }from 'react-native';
import backgroundStyle from '../commons/backgroundStyle';
import { SocialIcon } from 'react-native-elements'
import * as Google from 'expo-google-app-auth';

export default function LoginScreen(){
    
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
            } else {
                console.log("Sign in with google failed. Please try again!")
            }
        } catch(error) {
            console.log(error);
        }
        
    }
    return (
        <SafeAreaView style={backgroundStyle.container}>
            <View style={backgroundStyle.scrollView}>
                <SocialIcon title='Sign in with Google' type='google'  button onPress={clickHandler} />
            </View>
        </SafeAreaView>
    );
}

