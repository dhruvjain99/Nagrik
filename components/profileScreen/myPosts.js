import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, FlatList,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class MyPostView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, description: "Fire at a car factory"}, 
        {id:2, description: "Theft in a mobile store"}, 
        {id:3, description: "Robbery in sector-17"}, 
        {id:4, description: "Gas leak in neighbourhood"}, 
        {id:5, description: "Road closed"}, 
        {id:6, description: "Flag march in sector-10"}, 
        {id:7, description: "Weekend curfew imposed"},
      ],
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.notificationList} 
          enableEmptySections={true}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View style={styles.notificationBox}>   
                <View>             
                  <Text style={styles.description}>{item.description}</Text>
                </View>
                <View style={styles.row}>             
                  <Text style={styles.date}>12/05/2021 13:07</Text>
                  <View style={{flexDirection: 'row'}}>
                  <Ionicons name={'md-create'} size={18} color='#c4c4c4' style={{marginTop: 10, marginRight: 20}} />
                  <Ionicons name={'md-trash'} size={18} color='#c4c4c4' style={{marginTop: 10, marginRight: 5}} />
                  </View>              
                </View>
              </View>      
            )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#000000'
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    justifyContent:'space-between',
    alignItems: 'center'
  },
 date:{
    marginTop:5,
    color:'#C4C4C4'
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  notificationBox: {
    padding:15,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#262626',
    borderRadius:10,
  },
  icon:{
    width:45,
    height:45,
  },
  description:{
    fontSize:18,
    color: "#FFFFFF",
  },
});
