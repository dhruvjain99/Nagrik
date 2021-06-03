import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as SecureStore from 'expo-secure-store';

export default function eventRecordingScreen({ route, navigation }) {
  let [uploadInProgress, setUploadInProgress] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [recording, setRecording] = useState(false)
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const { incidentId } = route.params;
  useEffect(() => {
      (async () => {
        const { status } = await Promise.all([
            Permissions.askAsync(Permissions.CAMERA),
            Permissions.askAsync(Permissions.AUDIO_RECORDING),
        ]);
        setHasPermission(status !== 'granted');
      })();
    }, []);
  if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => {
        setCameraRef(ref) ;
    }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            paddingBottom: 20,
            justifyContent: 'flex-end'
          }}>
              <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly'
            }}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end'
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Ionicons name={ Platform.OS === 'ios' ? "ios-reverse-camera" : 'md-reverse-camera'} size={40} color="white" />
          </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => {
              if(!recording){
                setRecording(true)
                const { uri, codec = "mp4" } = await cameraRef.recordAsync();

                const type = `video/${codec}`;
                const data = new FormData();
                
                data.append("file", {
                  name: `IncidentId-${incidentId}`,
                  type,
                  uri
                });
                
                try {
                  const token = await SecureStore.getItemAsync('token');
                  const response = await fetch('https://nagrik-backend.herokuapp.com/incidents/newIncidentVideo', {
                    method: "post",
                    headers: {
                      'Accept': 'application/json',
                      'Authorization': 'Bearer ' + token,
                    },
                    body: data
                  });
                  let responseJson = await response.json();
                  console.log(responseJson);
                  alert("Incident created successfully.")
                } catch (e) {
                  console.error(e);
                  alert("Sorry, try again!")
                }
                setUploadInProgress(false);
                navigation.navigate('TabNavigation')
              } 
            else {
                setRecording(false)
                cameraRef.stopRecording();
                setUploadInProgress(true);
            }
          }}>
            <View style={{ 
               borderWidth: 2,
              borderRadius:50,
               borderColor: 'white',
               height: 70,
               width:70,
               display: 'flex',
              justifyContent: 'center',
               alignItems: 'center'}}
            >
              <View style={{   
               borderRadius:25,
               borderColor: recording ? "red":'white',
                 height: 30,
                 width:30,
                 backgroundColor: recording ? "red":'white'}} >
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={{
              alignSelf: 'flex-end'
            }}>
          <Ionicons name={ Platform.OS === 'ios' ? "ios-flash":"md-flash"} size={40} color="white" />
          </TouchableOpacity>
        </View>
        </View>
      </Camera>
      {
        uploadInProgress && 
        <View style={styles.loading}>
            <ActivityIndicator size='large' color="#fff" />
            <Text style={{marginTop: 20, color: '#fff'}}>Uploading ...</Text>
        </View>
      }
    </View>
  );
  
}

const styles = StyleSheet.create({
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
})

           
        
     
