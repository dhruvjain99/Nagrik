import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Emoji from 'react-native-emoji';
import VideoScreen from './videoScreen.js';
import { Ionicons } from '@expo/vector-icons';

export default function Bottom() {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: '#1B191B',
        padding: 16,
        height: 600,
      }}
    >
      <Text style={{ fontWeight: 'bold', color: '#F3BE05' }}>~260 ft E . 11 mins ago</Text>
      <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Taxi Cab Crashed Into Cafe</Text>
      <Text style={{ fontWeight: 'bold', color: '#858487' }}>Sector-10 Chandigarh</Text>
      <Ionicons name="md-chatbubbles" color="white" size="28"></Ionicons>
    </View>
  );
 
  const sheetRef = React.useRef(null);
 
  return (
    <>
      <View>
        <VideoScreen />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[150, 600]}
        borderRadius={20}
        renderContent={renderContent}
      />
    </>
  );
}