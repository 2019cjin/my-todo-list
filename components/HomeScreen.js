import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class HomeScreen extends React.Component {

    //https://medium.freecodecamp.org/how-to-build-a-nested-drawer-menu-with-react-native-a1c2fdcab6c9

    static navigationOptions = {
        title: 'My TODO List',
        headerStyle: {
          backgroundColor: '#59ADFF',
        },
        headerRight: (
            <TouchableOpacity onPress={() => alert('Search something!')}>
            <Image source ={require('../images/search-24px.png')}/>
        </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity  onPress={() => alert('This is the menu!')}>
                <Image source ={require('../images/menu-24px.png')}/>
            </TouchableOpacity>
          ),
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

    render() {
      return (
        <View style={styles.container}>
          <Text style = {styles.text}>Home Screen</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    text: {
      color: '#000000',
      fontSize: 36,
      textAlign: 'center',
    },
    logo:{
      width: 200,
      height: 200,
      resizeMode: 'contain',
      justifyContent:'center'
    }
  });