import React, { Fragment } from 'react';
import { View, SafeAreaView } from 'react-native';
import backgroundStyle from '../commons/backgroundStyle';
import MapDisplay from './mapDisplay';
import IncidentDisplay from './incidentDisplay';

export default function HomeScreen(){
    return (
        <Fragment>
            <SafeAreaView style={backgroundStyle.container}>
                <View style={{ flex: 1, display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
                    <MapDisplay /> 
                    <IncidentDisplay />                
                </View>
            </SafeAreaView>
        </Fragment>
    );
}
