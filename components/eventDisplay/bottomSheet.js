import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import VideoScreen from './videoScreen.js';
import {Ionicons} from '@expo/vector-icons';

export default function Bottom() {
  const renderContent = () => (
    <View style={{backgroundColor: '#1B191B', padding: 16, height: 300}}>
      <Text style={{ fontWeight: 'bold', color: '#F3BE05', marginTop: 5, marginBottom: 5 }}>~260 ft E . 11 mins ago</Text>
      <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, marginTop: 5, marginBottom: 5 }}>Taxi Cab Crashed Into Cafe</Text>
      <Text style={{ fontWeight: 'bold', color: '#858487', marginTop: 5, marginBottom: 5 }}>Sector-10 Chandigarh</Text>
      <Text style={styles.postDescription}>
      A taxi cab driver crashed the car into a local cafe in sector-10.
      Luckily, no injuries have been reported yet.
      </Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name={'ios-thumbs-up'} size={22} color='#FFFFFF'/>
          <Text style={styles.shareButtonText}>Up</Text>
          <Text style={{color: "gray", marginTop:2}}>125</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name={'ios-thumbs-down'} size={22} color='#FFFFFF'/>
          <Text style={styles.shareButtonText}>Down</Text>  
          <Text style={{color: "gray", marginTop:2}}>5</Text>           
        </TouchableOpacity>
      </View>
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
        snapPoints={[120, 300]}
        borderRadius={20}
        renderContent={renderContent}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#000000"
  },
  spaceText: {
    margin: 15
  },
  header:{
    padding:30,
    alignItems: 'center',
    backgroundColor: "#262626",
  },
  headerTitle:{
    fontSize:30,
    color:"#FFFFFF",
    marginTop:10,
  },
  postContent: {
    flex: 1,
    padding:30,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  postTitle:{
    fontSize:26,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  postDescription:{
    fontSize:16,
    marginTop:10,
    color:"#FFFFFF",
    textAlign:'justify'
  },
  tagBorder: { 
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#262626',
    color:"#FFFFFF",
    padding : 4, 
    textAlign: 'center', 
    textAlignVertical:'center',
    margin: 10,
  },
  date:{
    //color: '#52555b',
    color: '#c4c4c4',
    marginTop:10,
    textAlign: 'right'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 40,
    borderWidth:1,
    borderColor: "#FFFFFF",
  },
  profile:{
    flexDirection: 'row',
    marginTop:20,
  },
  name:{
    fontSize:18,
    color:"#FFFFFF",
    fontWeight:'600',
    alignSelf:'center',
    marginLeft:10
  }, 
  shareButton: {
    marginTop:20,
    display: 'flex',
    height:42,
    width:140,
    alignSelf:"center",
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#262626",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:18,
  }
});