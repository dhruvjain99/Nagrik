import React, { Component, Fragment, useState, useEffect } from 'react';
import {StyleSheet, Text, View, Image, FlatList, SafeAreaView, Alert,  } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import backgroundStyle from '../commons/backgroundStyle';

//Problems - Sorting timewise of list, backend updation

export default function MyPostView({ navigation, route }) {

const [myPosts, setMyPosts] = useState([]);

function pad(n) {
    return n<10 ? '0'+n : n;
}

async function editMyPost(newItem)
{
  console.log(newItem);
  console.log(newItem.someID);
  const token = await SecureStore.getItemAsync('token');
  const response = await fetch('https://nagrik-backend.herokuapp.com/users/updatePost', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    },
    body:JSON.stringify(
    {
      '_id' : newItem.someID,
      'name' : newItem.name,
      'isDelete' : false,
      'description' : newItem.desc,
    },)
});
let responseJson = await response.json();
console.log("Edit: ", responseJson);

}

async function deleteMyPost(newItem)
  {
    // uncomment below code to set item invisible-
    const newmyPosts = [...myPosts];
    const elementsIndex = myPosts.findIndex(element => element.id == newItem.id );
    newmyPosts[elementsIndex] = {...newmyPosts[elementsIndex], isvisible: false};
    setMyPosts(newmyPosts);
    console.log(newItem.someID);
    const token = await SecureStore.getItemAsync('token');
    const response = await fetch('https://nagrik-backend.herokuapp.com/users/updatePost', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
      },
      body:JSON.stringify(
      {

        '_id' : newItem.someID,
        'name' : newItem.name,
        'isDelete' : true,
        'description' : newItem.desc,
      })
  });
  let responseJson = await response.json();
  console.log("Delete: ",responseJson);
  }

  async function ListMyPosts(){
    const token = await SecureStore.getItemAsync('token');
    const response = await fetch('https://nagrik-backend.herokuapp.com/Users/userPosts', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
      },
  });
  let responseJson = await response.json();
  var i;
  let postInfo = [];

  for(i=0;i<responseJson.length;i++)
  {
    var name = responseJson[i].name;
    var description = responseJson[i].description;
    var createdAt = responseJson[i].createdAt;
    var updatedAt = responseJson[i].updatedAt;
    var id = responseJson[i]._id;
    var is_specialCovidPost = responseJson[i].is_specialCovidPost;
    const datecreated = new Date(createdAt);
    const dateupdated = new Date(updatedAt);
    const dateToDisplay = pad(dateupdated.getDate()) + "/" +  pad(dateupdated.getMonth()+1) +  "  " + pad(dateupdated.getHours()) + ":" + pad(dateupdated.getMinutes());
    var obj = {key: id ,dateToDisplay: dateToDisplay, isvisible: true, id: i, desc: description, name: name, isCovid: is_specialCovidPost, someID: id, timeCreated: datecreated, timeUpdated: dateupdated}
    postInfo.push(obj);
  }
  const sortedpostInfo = postInfo.sort((a,b)=>b.timeUpdated-a.timeUpdated);
  setMyPosts(sortedpostInfo);
  
  }
  
  useEffect(()=>{
    ListMyPosts();
  },[]);


//Happens upon Editing
  useEffect(() => {
    if (route.params?.newItem) {
      const newItem = route.params.newItem;
      const newmyPosts = [...myPosts];
      const elementsIndex = myPosts.findIndex(element => element.id == newItem.id );
      newmyPosts[elementsIndex] = {...newmyPosts[elementsIndex], name: newItem.name, desc: newItem.desc};
      editMyPost(newItem); // function call to update backend
      setMyPosts(newmyPosts);
    }
  }, [route.params?.newItem]);


    return (

      <Fragment>
      <SafeAreaView style={backgroundStyle.container}>
      <View style={styles.container}>
        <FlatList 
        showsVerticalScrollIndicator={false}
          style={styles.notificationList} 
          enableEmptySections={true}
          data={myPosts}
          keyExtractor= {(item) => {
           item.id;
          }}

          renderItem={({item}) => (
              item.isvisible?
              <View style={styles.notificationBox}>   
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>             
                  <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail' >{item.name}</Text>
                  
                  <Text style={styles.date}>{item.dateToDisplay}</Text>
                </View>
                <View>
                  <Text style={styles.desc} numberOfLines={3} ellipsizeMode='tail' > {item.desc} </Text>
                </View>
                <View style={styles.row}>             
                  
                  <View style={{flexDirection: 'row'}}>
                  <Ionicons name={'md-create'} size={20} color='#c4c4c4' 
                  style={{marginTop: 10, marginRight: 30}} onPress={()=>{
                    navigation.navigate('EditPostScreen', {
                      item: {item},
                    });
                    
                    

                  }}/>
                  <Ionicons name={'md-trash'} size={20} color='#c4c4c4' 
                  style={{marginTop: 10, marginRight: 15} } onPress= {() => 
                  Alert.alert(
                    "Do you really want to delete this post?",
                    "",
                    [
                      {
                        text: "No",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      { text: "Yes", 
                      onPress: () => {
                        //send backend API call to delete this post and remove post from list by setting isvisible prop false
                        deleteMyPost(item);
                      } }
                    ]
                  )} />
                  </View>              
                </View>
              </View>   :
              <View> 
                </View>  
            )
          }/>
      </View>
      </SafeAreaView>
      </Fragment>
      
      
    );
  
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
    color:'#C4C4C4'
  },
  desc:{
    marginTop:5,
    color:'#C4C4C4',

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
  name:{
    width: '60%',
    fontSize:18,
    color: "#FFFFFF",
    
  },
});
