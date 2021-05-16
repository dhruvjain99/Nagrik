import React from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'

export default class VideoScreen extends React.Component {
	
  render() {
	
    return (
      <View style={{height: 150}}>				
      <VideoPlayer
      videoProps={{
        shouldPlay: true,
        resizeMode: Video.RESIZE_MODE_COVER,
        source: {
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        },     
      }}
      inFullscreen={false}
    />					
      </View>
		);
  }
}