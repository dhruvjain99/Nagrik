import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function covid(){
  const navigation = useNavigation(); 
  var [ isPress, setIsPress ] = React.useState(false);

  var touchDonation = {
    activeOpacity: 1,
    underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => navigation.navigate('CovidOptions', {title:'Available'}),  
                 }               // <-- "onPress" is
    var touchRequirement = {
    activeOpacity: 1,
    underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => navigation.navigate('CovidOptions',{title:'Need'}),  
                 }                            
                               
    var touchGeneralinfo = {
      activeOpacity: 1,
      underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => {navigation.navigate('Description',{title:'Covid Alert'})},  
                               }

    return(
        <View style={styles.container}>
              <ScrollView>
                <View style={styles.row} >
                  <View>
                <View style={styles.test}>
                <TouchableHighlight  {...touchRequirement} style={[styles.card, {backgroundColor:"#cccccc"}]} >
                <View style={{alignItems:"center", justifyContent:"center"}}>
                  <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/color/70/000000/welfare.png"}}/>
                  </View>
                </TouchableHighlight>
                </View>
                
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={[styles.title, {color:"#cccccc"}]}>Requirement</Text>
                  </View>
                </View>
                </View>

                <View>
                <View style={styles.test}>
                <TouchableHighlight  {...touchDonation} style={[styles.card, {backgroundColor:"#cccccc"}]} >
                <View >
                  <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/color/70/000000/helping-hand.png"}}/>
                  </View>
                </TouchableHighlight>
                </View>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={[styles.title, {color:"#cccccc"}]}>Available</Text>
                  </View>
                </View>
                </View>
                </View>
                

                <View style={styles.test}>
                <TouchableHighlight  {...touchGeneralinfo} style={[styles.card, {backgroundColor:"#cccccc"}]} >
                <View style={{alignItems:"center", justifyContent:"center"}}>
                  <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/pastel-glyph/70/000000/regular-document--v1.png"}}/>
                  </View>
                </TouchableHighlight>
                </View>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={[styles.title, {color:"#cccccc"}]}>General information</Text>
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
      marginHorizontal: 25
      ,
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
      fontSize:24,
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