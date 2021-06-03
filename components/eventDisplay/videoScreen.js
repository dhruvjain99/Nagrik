import React from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'

export default class VideoScreen extends React.Component {
	
  render() {
	
    return (
      <View>				
      <VideoPlayer
      videoProps={{
        shouldPlay: true,
        resizeMode: Video.RESIZE_MODE_COVER,
        source: {
          uri: `https://nagrik-backend.herokuapp.com/incidents/play/`,
        },     
      }}
      height={740}
      inFullscreen={false}
    />					
      </View>
		);
  }
}