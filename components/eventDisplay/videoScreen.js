import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'

export default class VideoScreen extends React.Component {
	


  render() {
	
    return (
      <View >
				
                <VideoPlayer
      videoProps={{
        shouldPlay: true,
        resizeMode: Video.RESIZE_MODE_STRETCH,
        source: {
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        },
      }}
      inFullscreen={false}
      //height={220}
    />
					
      </View>
		);
  }
}