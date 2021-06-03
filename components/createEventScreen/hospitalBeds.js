import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HospitalBeds ({route}) {

  const navigation = useNavigation(); 
  var [ isPress, setIsPress ] = React.useState(false);
  

  var touchOxygen = {
    activeOpacity: 1,
    underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {navigation.navigate('Description',{ title: route.params.title +" "+"(Oxygen Bed)"})},  
                 }               // <-- "onPress" is
    var touchIcu = {
    activeOpacity: 1,
    underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {navigation.navigate('Description',{ title:route.params.title+" "+"(ICU BED)"})},  
                 } 
    var touchVentilator = {
    activeOpacity: 1,
    underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {navigation.navigate('Description', { title:route.params.title+" "+"(Ventilator)"})},  
                 } 
    var touchHome = {
    activeOpacity: 1,
    underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {navigation.navigate('Description',{ title:route.params.title+" "+"(Home Ventilator)"})},  
                 } 
   
 
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.row} >
        <View>
      <View style={styles.test}>
      <TouchableHighlight  {...touchOxygen} style={[styles.card, {backgroundColor:"#cccccc"}]} >
      <View style={{alignItems:"center", justifyContent:"center"}}>
        <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/pastel-glyph/70/000000/regular-document--v1.png"}}/>
        </View>
      </TouchableHighlight>
      </View>
      
      <View style={styles.cardHeader}>
        <View style={{alignItems:"center", justifyContent:"center"}}>
          <Text style={[styles.title, {color:"#cccccc"}]}> Oxygen Bed</Text>
        </View>
      </View>
      </View>

      <View>
      <View style={styles.test}>
      <TouchableHighlight  {...touchIcu} style={[styles.card, {backgroundColor:"#cccccc"}]} >
      <View >
        <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/pastel-glyph/70/000000/regular-document--v1.png"}}/>
        </View>
      </TouchableHighlight>
      </View>
      <View style={styles.cardHeader}>
        <View style={{alignItems:"center", justifyContent:"center"}}>
          <Text style={[styles.title, {color:"#cccccc"}]}>ICU Beds</Text>
        </View>
      </View>
      </View>
      </View>
      
      <View style={styles.row} >
      <View>
    <View style={styles.test}>
    <TouchableHighlight  {...touchVentilator} style={[styles.card1, {backgroundColor:"#cccccc"}]} >
    <View style={{alignItems:"center", justifyContent:"center"}}>
      <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/pastel-glyph/70/000000/regular-document--v1.png"}}/>
      </View>
    </TouchableHighlight>
    </View>
    
    <View style={styles.cardHeader}>
      <View style={{alignItems:"center", justifyContent:"center"}}>
        <Text style={[styles.title, {color:"#cccccc"}]}>Ventilator</Text>
      </View>
    </View>
    </View>

    <View>
    <View style={styles.test}>
    <TouchableHighlight  {...touchHome} style={[styles.card1, {backgroundColor:"#cccccc"}]} >
    <View >
      <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/pastel-glyph/70/000000/regular-document--v1.png"}}/>
      </View>
    </TouchableHighlight>
    </View>
    <View style={styles.cardHeader}>
      <View style={{alignItems:"center", justifyContent:"center"}}>
        <Text style={[styles.title, {color:"#cccccc"}]}>Home Ventilator</Text>
      </View>
    </View>
    </View>
    </View>
    
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    alignItems: 'stretch',
    backgroundColor: '#000',
  },
    /***** card **************/
    card:{
      shadowColor: '#474747',
      //alignItems:'center',
      
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
  
      elevation: 12,
      marginVertical: 20,
      marginHorizontal: 25,
      backgroundColor:"#e2e2e2",
      //flexBasis: '42%',
      width:120,
      height:120,
      borderRadius:60,
     alignItems:'center',
    justifyContent:'center',
      flexDirection: 'row',
    },
    card1:{
      shadowColor: '#474747',
      //alignItems:'center',
      
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
  
      elevation: 12,
      marginVertical: 20,
      marginHorizontal: 25,
      backgroundColor:"#e2e2e2",
      //flexBasis: '42%',
      width:120,
      height:120,
      borderRadius:60,
     alignItems:'center',
    justifyContent:'center',
      flexDirection: 'row',
    },
    cardHeader: {
      paddingVertical: 1,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
     alignItems:"center", 
    justifyContent:"center"
    },
  
    cardImage:{
      height: 50,
      width: 50,
     alignItems:'center',
      alignSelf:'center'
    },
    row:{
      flexDirection:'row',
    },
    title:{
      fontSize:20,
      flex:1,
      fontWeight:'bold'
    },
    test: {
      flex: 1,
     justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    },
    btnNormal: {
      borderColor: 'blue',
      borderWidth: 1,
      borderRadius: 10,
      height: 30,
      width: 100,
    },
    btnPress: {
      borderColor: 'blue',
      borderWidth: 1,
      height: 30,
      width: 100,
    }
  });     