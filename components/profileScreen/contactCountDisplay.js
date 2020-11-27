import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { contactCountDisplayContainerColor, displayNameColor } from '../commons/cssVariables';

export default function ContactCountDisplay(){
    return (
        <View style={styles.container}> 
            <View>
                <Text style={styles.mainText}>0 Communities</Text>
                <Text style={styles.subText}>places</Text>
            </View>
            <View>
                <Text style={styles.mainText}>0 Contacts</Text>
                <Text style={styles.subText}>friends</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: "nowrap",
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: contactCountDisplayContainerColor,
        width: '80%',
        paddingHorizontal: 22,
        paddingVertical: 15,
        marginTop: 10,
        borderRadius: 25,
    },
    mainText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14
    },
    subText: {
        color: displayNameColor,
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: "center",
        marginTop: 5,
        textTransform: "uppercase"
    }
});