import React, { useState } from 'react';
import { Dimensions, TextInput, View, StyleSheet, Text } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function UpperScreen(){
  const navigation = useNavigation(); 
    //variables to be sent to backend-title, desc, tag1,2,3 & location (to be added)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag1, setTag1] = useState(false);
    const [tag2, setTag2] = useState(false);
    const [tag3, setTag3] = useState(false);

    function validatefield(str)
    {
        if(str!="")
        return true;
        return false;
    }
    function validatetag(tag)
    {
        if(tag==true)
        return true;
        return false;
    }
  function onNext() 
  {

     if(validatefield(title) && validatefield(description))
     {
        if((validatetag(tag1) || validatetag(tag2) || validatetag(tag3)) )
        {
            navigation.navigate('LowerScreen', {title: title});
                //pass variables as props to camera screen & redirect
        }
        else{
            alert("Please choose an alert type")
        }
        
     }
     else{
         alert("All fields are mandatory.")
     }
     

  }
   
    return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.heading}> Title </Text>
            <TextInput           
            value={title}
            onChangeText={(title) => setTitle(title)}         
            style={styles.title}
            />
            <Text style={styles.heading}> Description </Text>
            <TextInput            
            numberOfLines={3}
            value={description}
            onChangeText={(description) => setDescription(description)}
            style={styles.desc}
            />
          </View>
          <View style={styles.bottomContainer}>
            <CheckBox
            style={styles.checkbox}
            containerStyle={{backgroundColor: '#0000', borderColor: '#0000'}}
            textStyle={{color: 'white', fontSize: 17}}
            title='Raise community awareness'
            checked={tag1}
            disabled={tag2 || tag3}
            onPress={()=>tag1==false?setTag1(true):setTag1(false)}
            />
            <CheckBox
            style={styles.checkbox}
            containerStyle={{backgroundColor: '#0000', borderColor: '#0000'}}
            textStyle={{color: 'white', fontSize: 17}}
            title='Broadcast neighbourhood upadtes'
            checked={tag2}
            disabled={tag1 || tag3}
            onPress={()=>tag2==false?setTag2(true):setTag2(false)}
            />
            <CheckBox
            style={styles.checkbox}
            containerStyle={{backgroundColor: '#0000', borderColor: '#0000'}}
            textStyle={{color: 'white', fontSize: 17}}
            title='Notify emergency contacts'
            disabled={tag2 || tag1}
            checked={tag3}
            onPress={()=>tag3==false?setTag3(true):setTag3(false)}
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

heading: {
        fontSize: 20,
        color: 'white',
        marginBottom: 7,
        fontWeight: "bold",
    },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'stretch',
    backgroundColor: '#000',
  },
  topContainer: {
    flex:4,
    marginTop: '10%'
  },
  bottomContainer:{
    flex:3,
    alignSelf: 'center'
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
  title: {
    width: "100%",
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 10,
    borderColor: 'grey',
    marginBottom: 10,
    flex: 0.3,
    height: 40,

  },
  desc: {
    width: "100%",
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

