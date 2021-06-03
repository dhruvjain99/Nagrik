import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import VideoScreen from './videoScreen.js';
import {Ionicons} from '@expo/vector-icons';

export default function NonCovidPostView({route}) {
  let [place, setPlace] = useState("");
  const { description, title, time, latitude, longitude } = route.params;

  useEffect(() => {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + latitude + ',' + longitude + '&location_type=ROOFTOP&result_type=political&key=' + "AIzaSyDeIEVhsCJxG4n2p_las5KC9lth0y81C-I")
        .then((response) => response.json())
        .then((responseJson) => {
            setPlace(responseJson.results[2].formatted_address);
        })
  }, [])

  const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];


  function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
    const day = date.getDate();
    const month = MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
      // Adding leading zero to minutes
      minutes = `0${ minutes }`;
    }

    if (prefomattedDate) {
      // Today at 10:20
      // Yesterday at 10:20
      return `${ prefomattedDate } at ${ hours }:${ minutes }`;
    }

    if (hideYear) {
      // 10. January at 10:20
      return `${ day }. ${ month } at ${ hours }:${ minutes }`;
    }

    // 10. January 2017. at 10:20
    return `${ day }. ${ month } ${ year }. at ${ hours }:${ minutes }`;
  }


  // --- Main function
  function timeAgo(dateParam) {
    if (!dateParam) {
      return null;
    }

    const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
    const today = new Date();
    const yesterday = new Date(today - DAY_IN_MS);
    const seconds = Math.round((today - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();


    if (seconds < 5) {
      return 'now';
    } else if (seconds < 60) {
      return `${ seconds } seconds ago`;
    } else if (seconds < 90) {
      return 'about a minute ago';
    } else if (minutes < 60) {
      return `${ minutes } minutes ago`;
    } else if (isToday) {
      return getFormattedDate(date, 'Today'); // Today at 10:20
    } else if (isYesterday) {
      return getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20
    } else if (isThisYear) {
      return getFormattedDate(date, false, true); // 10. January at 10:20
    }

    return getFormattedDate(date); // 10. January 2017. at 10:20
  }

  const renderContent = () => (
    <View style={{backgroundColor: '#1B191B', padding: 16, height: 300}}>
      <Text style={{ fontWeight: 'bold', color: '#F3BE05', marginTop: 5, marginBottom: 5 }}>{timeAgo(time)}</Text>
      <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, marginTop: 5, marginBottom: 5 }}>{title}</Text>
      <Text style={{ fontWeight: 'bold', color: '#858487', marginTop: 5, marginBottom: 5 }}>{place}</Text>
      <Text style={styles.postDescription}>
      {description}
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
