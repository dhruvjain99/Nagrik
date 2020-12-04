import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity,Button,Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import { useNavigation } from '@react-navigation/native';

export default function LowerScreen() {
  const navigation = useNavigation();  
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [recording, setRecording] = useState(false)
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
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
           // flex: 0.2,
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
                let video;
              if(!recording){
                setRecording(true)
                video = await cameraRef.recordAsync();
                console.log('video', video);
              } 
            else {
                setRecording(false)
                cameraRef.stopRecording()
                // alert(route.params.title)
                // console.log(route.params.paramKey)
                alert("Incident created successfully.")
                navigation.navigate('TabNavigation')
               
                //empty form
                
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
            //flex: 0.2,
              alignSelf: 'flex-end'
            }}>
          <Ionicons name={ Platform.OS === 'ios' ? "ios-flash":"md-flash"} size={40} color="white" />
          </TouchableOpacity>
        </View>
        </View>
      </Camera>
    </View>
  );
  
}






 
              
           
        
     
