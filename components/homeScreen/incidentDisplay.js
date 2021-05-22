import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import * as SecureStore from 'expo-secure-store';

export default function IncidentDisplay(){

    const [distance, setDistance] = useState("1000");
    const [nearbyUsers, setNearbyUsers] = useState("0");
    const [nearbyIncidents, setNearbyIncidents] = useState("0");
    
    //call api to fetch users and incidents

    
    async function updateNumber(distance){
      
      const token = await SecureStore.getItemAsync('token');
      var str1 = 'https://nagrik-backend.herokuapp.com/userFeed/find?distance='
      var str2 = distance;
      var endpoint = str1.concat(str2);
      
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });
    let responseJson = await response.json();
    setNearbyIncidents(responseJson.length);


    var str3 = 'https://nagrik-backend.herokuapp.com/userFeed/countUsers?distance='
    var str4 = distance;
    var endpoint2 = str3.concat(str4);
    const response2 = await fetch(endpoint2, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
      },
  });
  let responseJson2 = await response2.json();
  // console.log(responseJson2);

  setNearbyUsers(responseJson2);
    }

    useEffect(()=>{
      updateNumber(distance);
    }, [distance]);

    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.value}>{nearbyIncidents}</Text>
                <TouchableOpacity>                   
                <Text style={styles.label}>Incidents</Text>
                </TouchableOpacity> 
            <Picker
          style={styles.onePicker} itemStyle={styles.onePickerItem}

          selectedValue={distance}
          mode="dropdown"
          //on value change, also fetch number of incidents and users
          onValueChange={(itemValue) => {setDistance(itemValue);
        }
          }
        >
          <Picker.Item style={styles.subtext} label="Within 1 km" value="1000" />
          <Picker.Item style={styles.subtext} label="Within 5 km" value="5000" />
          <Picker.Item style={styles.subtext} label="Within 10 km" value="10000" />
          <Picker.Item style={styles.subtext} label="Within 1000 km" value="10000000" />
        </Picker>
            </View>
            <View>
                <Text style={styles.value}>{nearbyUsers}</Text>
                <TouchableOpacity>
                    <Text style={styles.label}>Users</Text>
                </TouchableOpacity>
                <Picker
          style={styles.onePicker} itemStyle={styles.onePickerItem}
          selectedValue={distance}
          mode="dropdown"
          onValueChange={(itemValue) => setDistance(itemValue)}
        >
          <Picker.Item style={styles.subtext} label="Within 1 km" value="1000" />
          <Picker.Item style={styles.subtext} label="Within 5 km" value="5000" />
          <Picker.Item style={styles.subtext} label="Within 10 km" value="10000" />
          <Picker.Item style={styles.subtext} label="Within 1000 km" value="10000000" />
        </Picker>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      padding: '1%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
      marginBottom: '10%', 
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
        fontSize: 17,
        marginTop: 2,
        textTransform: "uppercase"
    },
    onePicker: {
      width: 130,
      height: 30,
      backgroundColor: 'rgba(0,0,0,0.6)',
      borderWidth: 0,
      color: 'white',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    onePickerItem: {
      fontSize: 15,
      height: 40,
      color: 'white',
    },

  });
  