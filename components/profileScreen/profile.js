import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserDisplay from './userDisplay';
import ContactCountDisplay from './contactCountDisplay';
import PostCountDisplay from './postCountDisplay';
import Sectionbreak from '../commons/sectionbreak';

export default function Profile(){
    return (
        <View style={styles.Profile}> 
            <UserDisplay/>
            <ContactCountDisplay/>
            <PostCountDisplay/>
            <Sectionbreak/>
        </View>
    );
}

const styles = StyleSheet.create({
    Profile: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 5
    }    
});