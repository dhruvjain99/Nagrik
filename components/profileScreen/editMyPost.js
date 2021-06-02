import React, {Fragment, useState} from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, FlatList, SafeAreaView, Keyboard, TouchableWithoutFeedback  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import backgroundStyle from '../commons/backgroundStyle';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function EditPostScreen({route, navigation})
{
    const item = route.params.item;
    const [title, setTitle] = useState(item.item.name);
    const [desc, setDesc] = useState(item.item.desc);
    const isCovid = item.item.isCovid;

    return (
        <Fragment>
            <SafeAreaView style={backgroundStyle.container}>
                <View style={styles.container}>
                <HideKeyboard>
                  <View style={styles.top}>
                    <View style={styles.title}>
                      {
                        isCovid?
                        <Text style={styles.titletextCovid} numberOfLines={1} ellipsizeMode='tail' >{title}</Text>:
                        <TextInput multiline={true} style={styles.titletext} 
                    value={title} onChangeText={(value)=>setTitle(value)} />

                      }
                    
                    </View>
                    <View style={styles.desc}>
                    <TextInput multiline={true}  style={styles.desctext} 
                    value={desc} onChangeText={(value)=>setDesc(value)} />
                    </View>
                    </View>
                    </HideKeyboard>
                    
                    <View style={styles.bottom}>
                    <TouchableOpacity onPress={()=>{
                        const newItem = item.item;
                        newItem.name = title;
                        newItem.desc = desc;
                        // route.params.handleChange(newItem);
                        
                        navigation.navigate({
                          name: 'MyPosts',
                          params: { newItem: newItem },
                          merge: true,
                        });
                    }}>
                      <View  style={styles.buttonContainerSave}>
                        <Text style={{color:'white', fontSize: 20}}>Save</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        alert("Discarded changes");
                        navigation.navigate('MyPosts');
                    }}>
                      <View  style={styles.buttonContainer}>
                        <Text style={{color:'white', fontSize: 20}}>Discard</Text>
                      </View>
                    </TouchableOpacity>
                      
                    </View>
                </View>
            </SafeAreaView>
        </Fragment>
    );
}

const styles = StyleSheet.create({
  buttonContainerSave: {
    justifyContent: 'center',
    height: 40,
    width:  100,
    borderRadius: 10,   
    backgroundColor: '#459135',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    height: 40,
    width:  100,
    borderRadius: 10,   
    backgroundColor: 'grey',
    alignItems: 'center',
  },
    container:{
      backgroundColor:'#000000',
      padding: 5,
      flex: 1,
      alignContent: 'flex-start',
    },
    bottom:{
        flex: 5,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
      },
      top:{
        flex:5,
      },

    desctext:{
        marginLeft:5,
      margin:2,
      color:'white',
      fontSize: 20,
    },
    titletext:{
        margin:5,
        color:'white',
        fontSize: 25,
        
    
      },
      titletextCovid:{
        margin:5,
        color:'grey',
        fontSize: 25,
        
    
      },

    title: {
        flex: 1,
        padding:10,
        marginTop:5,
        marginBottom:10,
        backgroundColor: '#262626',
        borderRadius:10,
        
      },
      desc: {
        // height: '40%',
        flex: 5,
        padding:10,
        marginTop:2,
        marginBottom:2,
        backgroundColor: '#262626',
        borderRadius:10,
      },
  });
  