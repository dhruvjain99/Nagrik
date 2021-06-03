import React, { useState } from 'react';
import { TextInput, View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Location from 'expo-location';
import * as SecureStore from 'expo-secure-store';

export default function nonCovidForm({routes, navigation}){
    let [uploadInProgress, setUploadInProgress] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag1, setTag1] = useState(false);
    const [tag2, setTag2] = useState(false);
    const [tag3, setTag3] = useState(false);

    function validatefield(str)
    {
        if(str!="")
        return true;
        return false;
    }
    function validatetag(tag)
    {
        if(tag==true)
        return true;
        return false;
    }
  async function onNext() 
  {

     if(validatefield(title) && validatefield(description))
     {
        if((validatetag(tag1) || validatetag(tag2) || validatetag(tag3)) )
        {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
          }
          let location = await Location.getCurrentPositionAsync({}); 
          const token = await SecureStore.getItemAsync('token');
          setUploadInProgress(true);
          const response = await fetch('https://nagrik-backend.herokuapp.com/incidents/newIncident', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + token,
              },
              body: JSON.stringify({
                "name": title,
                "description": description,      
                "latitude": location.coords.latitude,
                "longitude": location.coords.longitude,
                "is_commAwareness": tag1,
                "is_neighUpdate": tag2,
                "is_emergency": tag3,
                "is_verified": true,
              })
          });
          setUploadInProgress(false);
          let responseJson = await response.json();
          navigation.navigate('eventRecordingScreen', {id: responseJson.IncidentID});
        }
        else{
            alert("Please choose an alert type")
        }
        
     }
     else{
         alert("All fields are mandatory.")
     }
     

  }
   
    return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.heading}> Title </Text>
            <TextInput           
            value={title}
            onChangeText={(title) => setTitle(title)}         
            style={styles.title}
            />
            <Text style={styles.heading}> Description </Text>
            <TextInput            
            numberOfLines={3}
            value={description}
            onChangeText={(description) => setDescription(description)}
            style={styles.desc}
            />
          </View>
          <View style={styles.bottomContainer}>
            <CheckBox
            style={styles.checkbox}
            containerStyle={{backgroundColor: '#0000', borderColor: '#0000'}}
            textStyle={{color: 'white', fontSize: 17}}
            title='Raise community awareness'
            checked={tag1}
            disabled={tag2 || tag3}
            onPress={()=>tag1==false?setTag1(true):setTag1(false)}
            />
            <CheckBox
            style={styles.checkbox}
            containerStyle={{backgroundColor: '#0000', borderColor: '#0000'}}
            textStyle={{color: 'white', fontSize: 17}}
            title='Broadcast neighbourhood updates'
            checked={tag2}
            disabled={tag1 || tag3}
            onPress={()=>tag2==false?setTag2(true):setTag2(false)}
            />
            <CheckBox
            style={styles.checkbox}
            containerStyle={{backgroundColor: '#0000', borderColor: '#0000'}}
            textStyle={{color: 'white', fontSize: 17}}
            title='Notify emergency contacts'
            disabled={tag2 || tag1}
            checked={tag3}
            onPress={()=>tag3==false?setTag3(true):setTag3(false)}
            />
          </View>
        <TouchableOpacity onPress={onNext}>
          <View  style={styles.buttonContainer}>
            <Text style={{color:'white', fontSize: 20}}>Next</Text>
          </View>
        </TouchableOpacity>
        {
          uploadInProgress && 
          <View style={styles.loading}>
              <ActivityIndicator size='large' color="#fff" />
              <Text style={{marginTop: 20, color: '#fff'}}>Creating new post ...</Text>
          </View>
        }
      </View>
    );
}
const styles = StyleSheet.create({

heading: {
        fontSize: 20,
        color: 'white',
        marginBottom: 7,
        fontWeight: "bold",
    },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'stretch',
    backgroundColor: '#000',
  },
  topContainer: {
    flex:4,
    marginTop: '10%'
  },
  bottomContainer:{
    flex:3,
    alignSelf: 'center'
  },
  buttonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '40%',
    height: 40,
    borderRadius: 10,   
    backgroundColor: '#459135',
    alignItems: 'center',
  },
  title: {
    width: "100%",
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 10,
    borderColor: 'grey',
    marginBottom: 10,
    flex: 0.3,
    height: 40,

  },
  desc: {
    width: "100%",
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 10,
    borderColor: 'grey',
    marginBottom: 20,
    textAlignVertical: "top",
    alignSelf: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'left',
    flexDirection: 'row',

  },
  loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#6c6d6ee6',
        color: '#fff'
    }
});

