import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import backgroundStyle from '../commons/backgroundStyle';
import {Ionicons} from '@expo/vector-icons';

export default class PostView extends Component {

  render() {
    return (
      <SafeAreaView style={backgroundStyle.container}>
        <View style={styles.container}>
          <View style={styles.postContent}>
            <Text style={styles.postTitle}>
              Oxygen Bed Required Urgently!
            </Text>
            <View style={styles.row}>
              <View style= {{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name={'md-locate'} size={18} color='#c4c4c4' style={{marginTop: 10, marginRight: 8}} />
                <Text style={styles.date}>
                  Chandigarh
                </Text>      
              </View>
              <Text style={styles.date}>
                17 hrs ago
              </Text>
            </View>
          <View style={styles.row}>
            <Text style={styles.tagBorder}>
              Need 
            </Text>
            <Text style={styles.tagBorder}>
              Hospital Beds
            </Text>
            <Text style={styles.tagBorder}>
              Oxygen Beds
            </Text>
          </View>

          <Text style={styles.postDescription}>
            My brother-in-law is suffering from COVID-19 and his health is very critical. He requires an oxygen bed urgently. He is a resident of Chandigarh.
          </Text>

          <View style={styles.profile}>
            <Image source={require('../../assets/user.png')} style={styles.avatar}/>
            <Text style={styles.name}>Abhishek Dhiman</Text>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.shareButton}>
              <Ionicons name={'ios-text'} size={22} color='#FFFFFF'/>
              <Text style={styles.shareButtonText}>Message</Text>  
            </TouchableOpacity> 
            <TouchableOpacity style={styles.shareButton}>
              <Ionicons name={'md-navigate'} size={22} color='#FFFFFF'/>
              <Text style={styles.shareButtonText}>Directions</Text>  
            </TouchableOpacity> 
          </View>
        </View>
        </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#000000"
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
    width:132,
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