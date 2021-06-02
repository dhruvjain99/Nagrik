import React, {useState} from 'react';
import {Dimensions, SafeAreaView, Image, Text, StyleSheet, View, FlatList, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function SearchFriend(){
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([{"title": "Dhruv Jain", "id": 1, "isFriend": false}, {"title": "Abhishek Dhiman", "id": 2, "isFriend": false}, {"title": "Sumant Jindal", "id": 3, "isFriend": false}, {"title": "Avinash Singh", "id": 4, "isFriend": false}, {"title": "Rohit Nehra", "id": 5, "isFriend": false}, {"title": "Kajal", "id": 6, "isFriend": false}, {"title": "Surbhi", "id": 7, "isFriend": false},  {"title": "Maxwell", "id": 8, "isFriend": false},  {"title": "Sameer", "id": 9, "isFriend": false},  {"title": "Alex", "id": 10, "isFriend": false},  {"title": "Prateek ", "id": 11, "isFriend": false}]);
  const [masterDataSource, setMasterDataSource] = useState([{"title": "Dhruv Jain", "id": 1, "isFriend": false}, {"title": "Abhishek Dhiman", "id": 2, "isFriend": false}, {"title": "Sumant Jindal", "id": 3, "isFriend": false}, {"title": "Avinash Singh", "id": 4, "isFriend": false}, {"title": "Rohit Nehra", "id": 5, "isFriend": false}, {"title": "Kajal", "id": 6, "isFriend": false}, {"title": "Surbhi", "id": 7, "isFriend": false},  {"title": "Maxwell", "id": 8, "isFriend": false},  {"title": "Sameer", "id": 9, "isFriend": false},  {"title": "Alex", "id": 10, "isFriend": false},  {"title": "Prateek ", "id": 11, "isFriend": false}]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      <View style={styles.itemStyle}>
        <View style={{flex: 1, flexDirection: 'row', alignItems:"center"}}>
          <Image source={require('../../assets/user.png')} style={styles.displayPhoto}/>
          <Text
            style={styles.itemNameStyle}
            onPress={() => getItem(item)}>
            {item.title.toUpperCase()}
          </Text>      
        </View>
        <Ionicons onPress={() => {
          console.log("TOGGLED")
          let newData = [];
          masterDataSource.map((friend) => {
            if(friend.id == item.id){
              friend.isFriend = !friend.isFriend;
            }
            newData.push(friend);
          })
          console.log(newData)
          setMasterDataSource(newData);
          setFilteredDataSource(newData);
          alert(`${item.title} added as your friend.`)
        }} name={item.isFriend ? 'md-done-all' : 'md-person-add'} size={27} color={item.isFriend ? 'green' : '#c4c4c4'}/>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          color='black'
          fontSize={18}
          alignItems='center'
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
          placeholderTextColor='#C4C4C4'
        />        
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  displayPhoto: {
    width: 40,
    height: 40,
    borderRadius: 40,
    overflow: "hidden",
    borderWidth: 9,
    marginVertical:10
  },
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000000',
    height: Dimensions.get('window').height
  },
  itemNameStyle: {
    paddingHorizontal: 20,
    paddingVertical: 22,
    color: 'white',
    fontSize: 17,
  },
  itemStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10
  },
  textInputStyle: {
    height: 45,
    borderWidth: 1,
    borderRadius:40,
    paddingLeft: 20,
    borderColor: '#FFFFFF',
    backgroundColor: 'white',
    marginTop: 14,
    marginBottom: 14
  },
});