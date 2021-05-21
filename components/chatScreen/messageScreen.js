import React, {Fragment} from 'react';
import { View, Text, Button, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './mesageStyles';
import backgroundStyle from '../commons/backgroundStyle';
import {StatusBar} from 'expo-status-bar';

const Messages = [
    {
      id: '1',
      userName: 'Rohit Nehra',
      userImg: require('../../assets/user.png'),
      messageTime: '4 mins ago',
      messageText:
        'Hey there, this is a test message, I am adding more words to test the wrapping property',
    },
    {
      id: '2',
      userName: 'Surbhi Goyal',
      userImg: require('../../assets/user.png'),
      messageTime: '2 hours ago',
      messageText:
      'Hey there, this is a test message',
    },
    {
      id: '3',
      userName: 'Kajal Chhajer',
      userImg: require('../../assets/user.png'),
      messageTime: '1 hours ago',
      messageText:
      'Hey there, this is a test message',
    },
    {
      id: '4',
      userName: 'Dhruv Jain',
      userImg: require('../../assets/user.png'),
      messageTime: '1 day ago',
      messageText:
      'Hey there, this is a test message',
    },
    {
      id: '5',
      userName: 'Avinash',
      userImg: require('../../assets/user.png'),
      messageTime: '2 days ago',
      messageText:
      'Hey there, this is a test message',
    },
    {
      id: '6',
      userName: 'Sumant',
      userImg: require('../../assets/user.png'),
      messageTime: '3 days ago',
      messageText:
      'Hey there, this is a test message',
    },
    {
      id: '7',
      userName: 'Abhishek Dhiman',
      userImg: require('../../assets/user.png'),
      messageTime: '6 days ago',
      messageText:
      'Hey there, this is a test message',
    },
  ];

  
const MessageScreen = ({navigation}) => {
    return (
      <Fragment>
      <SafeAreaView style={backgroundStyle.container}>
      <View style={styles.container}>
          <Text style={styles.heading}> Messages </Text>
        </View>
          <FlatList 
            data={Messages}
            keyExtractor={item=>item.id}
            renderItem={({item}) => (
              <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
                <UserInfo>
                  <UserImgWrapper>
                    <UserImg source={item.userImg} />
                  </UserImgWrapper>
                  <TextSection>
                    <UserInfoText>
                      <UserName>{item.userName}</UserName>
                      <PostTime>{item.messageTime}</PostTime>
                    </UserInfoText>
                    <MessageText>{item.messageText}</MessageText>
                  </TextSection>
                </UserInfo>
              </Card>
            )}
          />
        </SafeAreaView>
        </Fragment>
      );
  };
  
export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    top: 10,
    padding: 10,
    marginBottom: 10,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'white',
    

},
heading: {
  fontSize: 25,
  color: 'white',
  textAlign: 'center',
},

});
