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

export default function CovidOptions({route}) {
  const navigation = useNavigation(); 
  var [ isPress, setIsPress ] = React.useState(false);
  
  var touchBeds = {
    activeOpacity: 1,
    underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {navigation.navigate('HospitalBeds', { title: route.params.title +" "+"Hospital Bed"})},  
                 }               // <-- "onPress" is

    var touchOxygen = {
      activeOpacity: 1,
      underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => {navigation.navigate('OxygenSupply', { title: route.params.title+ " "+"Oxygen Supply"})},  
                      }   

    var touchAmbulance = {
      activeOpacity: 1,
      underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => {navigation.navigate('Description', { title:route.params.title+" "+"Ambulance"})},  
                               }
      var touchPlasma = {
      activeOpacity: 1,
      underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => {navigation.navigate('Description', { title: route.params.title+" "+"Plasma Donor"})},  
                               }
      var touchMedicines = {
      activeOpacity: 1,
      underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => {navigation.navigate('Description', { title: route.params.title+" "+"Medicine"})}, 
      }
      
      var touchFood = {
        activeOpacity: 1,
        underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
        style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => {navigation.navigate('Description', { title: route.params.title+" "+"Food"})},  
                                 }
     var touchVaccination = {
      activeOpacity: 1,
      underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => {navigation.navigate('Description', { title: route.params.title+" "+"Vaccine"})},  
                               }
    
                               
                               
    return (
      <View style={styles.container}>
       <ScrollView>

       <View style={styles.row} >
                  <View>
                <View style={styles.test}>
                <TouchableHighlight  {...touchAmbulance} style={[styles.card, {backgroundColor:"#cccccc"}]} >
                <View style={{alignItems:"center", justifyContent:"center"}}>
                  <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/officel/70/000000/ambulance.png"}}/>
                  </View>
                </TouchableHighlight>
                </View>
                
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={[styles.title, {color:"#cccccc"}]}>Ambulance</Text>
                  </View>
                </View>
                </View>

                <View>
                <View style={styles.test}>
                <TouchableHighlight  {...touchBeds} style={[styles.card, {backgroundColor:"#cccccc"}]} >
                <View >
                  <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/plasticine/70/4a90e2/hospital-room.png"}}/>
                  </View>
                </TouchableHighlight>
                </View>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={[styles.title, {color:"#cccccc"}]}>Hospitals Beds</Text>
                  </View>
                </View>
                </View>
                </View>
                
                <View style={styles.row} >
                  <View>
                <View style={styles.test}>
                <TouchableHighlight  {...touchMedicines} style={[styles.card, {backgroundColor:"#cccccc"}]} >
                <View style={{alignItems:"center", justifyContent:"center"}}>
                  <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/color/70/4a90e2/supplement-bottle.png"}}/>
                  </View>
                </TouchableHighlight>
                </View>
                
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={[styles.title, {color:"#cccccc"}]}>Medicines</Text>
                  </View>
                </View>
                </View>

                <View>
                <View style={styles.test}>
                <TouchableHighlight  {...touchOxygen} style={[styles.card, {backgroundColor:"#cccccc"}]} >
                <View >
                  <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/color/70/4a90e2/scuba-tank.png"}}/>
                  </View>
                </TouchableHighlight>
                </View>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={[styles.title, {color:"#cccccc"}]}>Oxygen Supply</Text>
                  </View>
                </View>
                </View>
                </View>
                
                <View style={styles.row} >
                  <View>
                <View style={styles.test}>
                <TouchableHighlight  {...touchPlasma} style={[styles.card, {backgroundColor:"#cccccc"}]} >
                <View style={{alignItems:"center", justifyContent:"center"}}>
                  <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/color/48/4a90e2/drop-of-blood.png"}}/>
                  </View>
                </TouchableHighlight>
                </View>
                
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={[styles.title, {color:"#cccccc"}]}>Plasma</Text>
                  </View>
                </View>
                </View>

                <View>
                <View style={styles.test}>
                <TouchableHighlight  {...touchFood} style={[styles.card, {backgroundColor:"#cccccc"}]} >
                <View >
                  <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/fluent/70/000000/plastic-food-container.png"}}/>
                  </View>
                </TouchableHighlight>
                </View>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={[styles.title, {color:"#cccccc"}]}>Food</Text>
                  </View>
                </View>
                </View>
                </View>
                
                
                <View style={styles.test}>
                <TouchableHighlight  {...touchVaccination} style={[styles.card, {backgroundColor:"#cccccc"}]} >
                <View style={{alignItems:"center", justifyContent:"center"}}>
                  <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/officel/70/000000/syringe.png"}}/>
                  </View>
                </TouchableHighlight>
                </View>
                
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={[styles.title, {color:"#cccccc"}]}>Vaccination</Text>
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
  
  /******** card **************/
  card:{
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 30,
    backgroundColor:"#e2e2e2",
    //flexBasis: '42%',
    width:120,
    height:120,
    borderRadius:60,
    alignItems:'center',
    justifyContent:'center'
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
    alignSelf:'center'
  },
  title:{
    fontSize:24,
    flex:1,
    alignSelf:'center',
    fontWeight:'bold'
  },
  row:{
    flexDirection:'row',
  },
  title:{
    fontSize:22,
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