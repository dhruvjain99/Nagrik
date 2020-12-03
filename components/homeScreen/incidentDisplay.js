import React, {useState} from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';

const range = [
    {
      label: 'Football',
      value: 'football',
    },
    {
      label: 'Baseball',
      value: 'baseball',
    },
    {
      label: 'Hockey',
      value: 'hockey',
    },
  ];
  

export default function IncidentDisplay(){

    const [distance, setDistance] = useState("1");
    // const [radius, setRadius] = useState("1");
    let nearbyUsers = 0;
    let nearbyIncidents = 0;    

    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.value}>{nearbyUsers}</Text>
                <TouchableOpacity>                   
                <Text style={styles.label}>Incidents</Text>
                </TouchableOpacity> 

            <Picker
          style={styles.onePicker} itemStyle={styles.onePickerItem}
          selectedValue={distance}
          mode="dropdown"
          onValueChange={(itemValue) => setDistance(itemValue)}
        >
          <Picker.Item style={styles.subtext} label="Within 1 km" value="1" />
          <Picker.Item style={styles.subtext} label="Within 5 km" value="5" />
          <Picker.Item style={styles.subtext} label="Within 10 km" value="10" />
          <Picker.Item style={styles.subtext} label="Within 100 km" value="100" />
        </Picker>
            </View>
            <View>
                <Text style={styles.value}>{nearbyIncidents}</Text>
                <TouchableOpacity>
                    <Text style={styles.label}>Users</Text>
                </TouchableOpacity>
                <Picker
          style={styles.onePicker} itemStyle={styles.onePickerItem}
          selectedValue={distance}
          mode="dropdown"
          onValueChange={(itemValue) => setDistance(itemValue)}
        >
          <Picker.Item style={styles.subtext} label="Within 1 km" value="1" />
          <Picker.Item style={styles.subtext} label="Within 5 km" value="5" />
          <Picker.Item style={styles.subtext} label="Within 10 km" value="10" />
          <Picker.Item style={styles.subtext} label="Within 100 km" value="100" />
        </Picker>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
    //   backgroundColor: 'orange',
      width: '100%',
      padding: '3%',
        flex:1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        marginTop: '90%', 
    },
    
    value: {
        color: '#56ad40',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: "center"
    },
    label: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        marginTop: 2,
        textTransform: "uppercase"
    },

    onePicker: {
      width: 150,
      height: 40,
      backgroundColor: 'rgba(0,0,0,0.1)',
      borderWidth: 0,
    },
    onePickerItem: {
      fontSize: 15,
      height: 40,
      color: 'white',
      
    },

  });
  