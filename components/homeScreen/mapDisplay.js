import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { displayNameColor, fontGreen } from '../commons/cssVariables';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { SearchBar } from 'react-native-elements';
import Geocoder from 'react-native-geocoding';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

Geocoder.init('AIzaSyDbKzhLTSxXJvkO83W4ar6aemJHVZmY9gM');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

async function UpdateLocation(loc)
{
    let location_json = await Geocoder.from(loc)
    let location = location_json.results[0].geometry.location;
    console.log(location);
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
              "visibility": "off"
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
              "visibility": "off"
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
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
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
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
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
              "visibility": "off"
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
              "visibility": "off"
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
              "visibility": "off"
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
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
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
              "visibility": "off"
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
        latitude: 30.900965,
        longitude: 70.857277,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    const [errorMsg, setErrorMsg] = useState(null);

    //call API to fetch markers 
  // axios.get('/incidents/find')
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
    let markers = [
        {latitude: 31.900965,
        longitude: 70.857277,
        description: "description goes here dhkaxc ukhjncask qiudkjasn iqwudhax oqwhljckasn iuwqdjkaxn iquwkjbcsan",
        title: "title"},
        {latitude: 30.900965,
        longitude: 72.857277,
        description: "xyz",
        title: "title"},
        {latitude: 32.900965,
        longitude: 70.857277,
        description: "xyz",
        title: "title"},
        {latitude: 33.900965,
        longitude: 71.857277,
        description: "xyz",
        title: "title"},                             
    ];

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
            onRegionChange={(region)=>{setRegion(region);
            }}
            
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
                                
            {markers.map(marker => (
                <Marker
                coordinate={{longitude: marker.longitude, latitude: marker.latitude}}
                title={marker.title}
                description={marker.description}>
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

                <Ionicons name="ios-chatbubbles" size={30} color="white" onPress={() => alert("Message button is pressed.")}/>
             
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
