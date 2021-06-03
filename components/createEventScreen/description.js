import React, { useState } from 'react';
import { Dimensions, TextInput, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

Geocoder.init('');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
async function UpdateLocation(loc)
{
    let location_json = await Geocoder.from(loc)
    let location = location_json.results[0].geometry.location;
    return location; 
}

export default function Description({route}){
  const navigation = useNavigation(); 
    //variables to be sent to backend-title, desc, tag1,2,3 & location (to be added)
    const [description, setDescription] = useState("");
    var searchText="";
    console.log(route.params.title);
    
    function validatefield(str)
    {
        if(str!="")
        return true;
        return false;
    }
   
  function onNext() 
  {

     if( validatefield(searchText)  )
     { 
         alert("Event is created Successfully.")
     }
        else{
            alert("Please choose the address.")
        } 

  }
   
    return (
        <View style={styles.container}>
          
         <View style={styles.topContainer}>
         <Text style={styles.title}>  {route.params.title} </Text>
         <View style={styles.bottomContainer}>
      
      <Text style={styles.heading}> Description </Text>
      <TextInput            
      numberOfLines={1}
      value={description}
      onChangeText={(description) => setDescription(description)}
      style={styles.desc}
      />
   
   </View>
         <Text style={styles.heading}> Address</Text>
         
         <GooglePlacesAutocomplete
          // style={GooglePlacesAutocompletestyle}
    placeholder="Search place"
    minLength={2} // minimum length of text to search
    autoFocus={false}
    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
    listViewDisplayed="auto" // true/false/undefined
    fetchDetails={true}
    // renderDescription={row => row.description} // custom description render
    onPress={
      async function(data, details = null) {
      console.log(data.description);
      searchText = data.description;
      var new_loc =   await UpdateLocation(searchText);
                  console.log(new_loc.lat);
                  console.log(new_loc.lng);             
                 
    }
  }
    getDefaultValue={() => {
      return ''; // text input default value
    }}
    query={{
      // available options: https://developers.google.com/places/web-service/autocomplete
      key: '',
      language: 'en', // language of the results
      // types: '(cities)', // default: 'geocode'
    }}
    styles={{
      
      listView: {
        
        overflow: 'visible'
      },
      
    }}
  
    nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
    
  />
  
  </View>
 
        <TouchableOpacity onPress={onNext}>
          <View  style={styles.buttonContainer}>
            <Text style={{color:'white', fontSize: 20}}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({

  title: {
    
    fontSize: 20,
    color: '#459135',
    marginBottom: 7,
    fontWeight: "bold",
    alignSelf: 'center',
    
},
heading: {
        fontSize: 20,
        color: 'white',
        marginBottom: 7,
        fontWeight: "bold",
    },
  container: {
    flex: 10,
    padding: 20,
    alignItems: 'stretch',
    backgroundColor: '#000',
  },
 
  buttonContainer: {
    
    alignSelf: 'center',
    justifyContent: 'center',
    width: '40%',
    height: 40,
    borderRadius: 10,   
    backgroundColor: '#459135',
    alignItems: 'center',
    
  },
  topContainer: {
    flex:1,
  
    marginTop: '10%',
    
  },
  bottomContainer:{
  flex:0.5,
  
  },
  
  desc: {
    width: "100%",
    height: "50%",
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 10,
    borderColor: 'grey',
    marginBottom: 20,
    textAlignVertical: "top",
    alignSelf: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'left',
    flexDirection: 'row',
  },
});
