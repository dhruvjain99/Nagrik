import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert, TouchableOpacity} from 'react-native';

export default class ContactView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/NAGRIK.gif')}/>
      
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Name"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>        
        <View style={styles.messageBox}>
          <TextInput style={[ styles.inputs]}
              placeholder="Message"
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer]} onPress={() => this.onClickListener('login')}>
          <Text style={{color:'white', fontSize: 20}}>Send</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  messageBox: {
      height:150,
      padding: 5,
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      margin:10,
      flexDirection: 'row',
      alignItems:'center'
  },
  logo:{
    width:200,
    height:200,
    justifyContent: 'center',
    marginBottom: 10
  },
  inputContainer: {
      padding: 5,
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      margin:10,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
    buttonContainer: {
    backgroundColor: '#459135',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '40%',
    height: 40,
    borderRadius: 10,   
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
  }
});