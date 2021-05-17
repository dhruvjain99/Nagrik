import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { fontGreen } from '../commons/cssVariables';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { SearchBar } from 'react-native-elements';
import Geocoder from 'react-native-geocoding';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as SecureStore from 'expo-secure-store';

Geocoder.init('AIzaSyDbKzhLTSxXJvkO83W4ar6aemJHVZmY9gM');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

async function UpdateLocation(loc)
{
    let location_json = await Geocoder.from(loc)
    let location = location_json.results[0].geometry.location;
    return location; 
}

export default function MapDisplay()
{
    const [searchText, setSeachText] = useState('');
    const map = useRef(null); 
    const navigation = useNavigation();  
    const g=  [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#757575"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#181818"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8a8a8a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#373737"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e4e4e"
            }
          ]
        },
        {
          "featureType": "road.local",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3d3d3d"
            }
          ]
        }
      ];
    const [region, setRegion] = useState({
        latitude: 70.900965,
        longitude: 30.857277,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    const [errorMsg, setErrorMsg] = useState(null);
    const [markers, setMarkers] = useState([]);
    
    async function plotIncidents(){
      const token = await SecureStore.getItemAsync('token');
      const response = await fetch('https://nagrik-backend.herokuapp.com/incidents/find', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });
    let responseJson = await response.json();
    var i;
    let markerInfo = [];

    for(i=0;i<responseJson.length;i++)
    {
      var name = responseJson[i].name;
      var desc = responseJson[i].description;
      var lat = responseJson[i].location.coordinates[0];
      var lon = responseJson[i].location.coordinates[1];

      var obj = {latitude: lat, longitude: lon, description: desc, title: name}
      markerInfo.push(obj);
    }
    setMarkers(markerInfo);  
    }
    
    useEffect(()=>{
      plotIncidents();
    },[]);


    useEffect(() => {
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setRegion({latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,});
        })();
      }, []);

    return(        
        <View>
            <MapView
            ref = {map}
            provider={PROVIDER_GOOGLE}
            style={styles.mapViewStyle}
            customMapStyle={g}  
            onMapReady={()=>{
                map.current.animateCamera(
                        {
                            center: {
                                latitude: region.latitude,
                                longitude: region.longitude,
                            },
                            
                        }, {duration: 500}
                    )
            }}
            // onRegionChange={(region)=>{setRegion(region);
            // }}
            
            initialCamera={
            {
                center: {
                    latitude: region.latitude,
                    longitude: region.longitude,
                },
                pitch: 10,
                heading: 10,
                altitude: 10,
                zoom: 15,
            }
            }                      
            showsUserLocation = {true} 
            maxZoomLevel={50}>
                                
            {markers.length!=0 && markers.map((marker, markerID) => 
              
              (
                <Marker
                key={markerID}
                pinColor={'#295221'}
                coordinate={{longitude: marker.longitude, latitude: marker.latitude}}
                title={marker.title}
                description={marker.description}
                onPress={() => navigation.navigate('Video')}
                
                >
                </Marker>
            ))}
             
            </MapView> 
            <View style={styles.container}>   
                <Ionicons name="md-contact" size={35} color="white" onPress={() => navigation.navigate('Profile')}/>                   
                <SearchBar
                round
                searchIcon={{ size: 20 }}
                containerStyle={styles.containerSearch}
                onChangeText={(searchText)=>{setSeachText(searchText)}}
                placeholder="Around you"
                value={searchText}
                onSubmitEditing={
                    async function() 
                    {   console.log("1");
                        var new_loc =   await UpdateLocation(searchText);
                        console.log("5");
                        setRegion(new_loc);              
                        map.current.animateCamera(
                            {
                                center: {
                                    latitude: new_loc.lat,
                                    longitude: new_loc.lng,
                                },
                                zoom: 10,
                                
                            }, {duration: 500}
                        )
                    }           
                }
                
                />

                <Ionicons name="ios-chatbubbles" size={30} color="white" onPress={() => navigation.navigate('Messages')}/>
             
            </View>           
            
            
        </View>
        
    );
}
const styles = StyleSheet.create(
    {
        containerSearch: {
            width: '65%',
            height: 5,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor:'transparent',
            borderTopWidth: 0,
            borderBottomWidth: 0,
    
        },
    mapViewStyle: 
    {
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
               
        },  
        Icon: {
            width:35,
            height:35,
            backgroundColor:'white',
            borderRadius:20,
            },
        container: {
            width: '100%',
            top: 10,
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-around',
    
        },
        
        value: {
            color: fontGreen,
            fontWeight: 'bold',
            fontSize: 17,
            textAlign: "center"
        },
    }
);
