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

export default function OxygenSupply ({route}) {
  const navigation = useNavigation(); 
  var [ isPress, setIsPress ] = React.useState(false);

  var touchCylinder = {
    activeOpacity: 1,
    underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {navigation.navigate('Description',{ title:route.params.title+" "+"(Oxygen Cylinder)"})},  
                 }               // <-- "onPress" is
    var touchRegulator = {
    activeOpacity: 1,
    underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {navigation.navigate('Description',{ title:route.params.title+" "+"(Oxygen Regulator)"})},  
                 }  
    var touchConcentrator = {
    activeOpacity: 1,
    underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {navigation.navigate('Description',{ title:route.params.title+" "+"(Oxygen Concentrator)"})},  
                 } 
    var touchOximeter = {
    activeOpacity: 1,
    underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {navigation.navigate('Description',{ title:route.params.title+" "+"(Oximeter)"})},  
                 }            
   
  
    return (
      <View style={styles.container}>
       <ScrollView>
       <View style={styles.row} >
        <View>
      <View style={styles.test}>
      <TouchableHighlight  {...touchCylinder} style={[styles.card, {backgroundColor:"#cccccc"}] } >
      <View style={{alignItems:"center", justifyContent:"center"}}>
        <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/pastel-glyph/70/000000/regular-document--v1.png"}}/>
        </View>
      </TouchableHighlight>
      </View>
      
      <View style={styles.cardHeader}>
        <View style={{alignItems:"center", justifyContent:"center"}}>
          <Text style={[styles.title, {color:"#cccccc"}]}> O2 Cylinder</Text>
        </View>
      </View>
      </View>

      <View>
      <View style={styles.test}>
      <TouchableHighlight  {...touchRegulator} style={[styles.card, {backgroundColor:"#cccccc"}]} >
      <View >
        <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/pastel-glyph/70/000000/regular-document--v1.png"}}/>
        </View>
      </TouchableHighlight>
      </View>
      <View style={styles.cardHeader}>
        <View style={{alignItems:"center", justifyContent:"center"}}>
          <Text style={[styles.title, {color:"#cccccc"}]}>O2 Regulator</Text>
        </View>
      </View>
      </View>
      </View>

      <View style={styles.row} >
        <View>
      <View style={styles.test}>
      <TouchableHighlight  {...touchConcentrator} style={[styles.card, {backgroundColor:"#cccccc"}]} >
      <View style={{alignItems:"center", justifyContent:"center"}}>
        <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/pastel-glyph/70/000000/regular-document--v1.png"}}/>
        </View>
      </TouchableHighlight>
      </View>
      
      <View style={styles.cardHeader}>
        <View style={{alignItems:"center", justifyContent:"center"}}>
          <Text style={[styles.title, {color:"#cccccc"}]}> O2 Concentrator</Text>
        </View>
      </View>
      </View>

      <View>
      <View style={styles.test}>
      <TouchableHighlight  {...touchOximeter} style={[styles.card, {backgroundColor:"#cccccc"}]} >
      <View >
        <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/pastel-glyph/70/000000/regular-document--v1.png"}}/>
        </View>
      </TouchableHighlight>
      </View>
      <View style={styles.cardHeader}>
        <View style={{alignItems:"center", justifyContent:"center"}}>
          <Text style={[styles.title, {color:"#cccccc"}]}>Oximeter</Text>
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
    cardHeader: {
      paddingVertical: 1,
      paddingHorizontal: 10,
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