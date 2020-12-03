import React from 'react';
import { ScrollView, SafeAreaView, Dimensions } from 'react-native';
import backgroundStyle from '../commons/backgroundStyle';
import MapDisplay from './mapDisplay';
import IncidentDisplay from './incidentDisplay';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function HomeScreen(){
    return (
        <SafeAreaView style={backgroundStyle.container}>
            <ScrollView style={backgroundStyle.scrollView} indicatorStyle="white">
                <MapDisplay /> 
                <IncidentDisplay />                
            </ScrollView>
        </SafeAreaView>
    );
}
