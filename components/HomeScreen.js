import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class HomeScreen extends React.Component {

    //https://medium.freecodecamp.org/how-to-build-a-nested-drawer-menu-with-react-native-a1c2fdcab6c9

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#59ADFF',
        },
        headerRight: (
            <TouchableOpacity onPress={() => alert('Search something!')}>
            <Image style = {{margin: 10}} source ={require('../images/search-24px.png')}/>
        </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity  onPress={() => alert('This is the menu!')}>
                <Image style = {{margin: 10}} source ={require('../images/menu-24px.png')}/>
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
          <Text style = {styles.text}>Hello, !</Text>

          <View style={styles.navigationControls}>
            <TouchableOpacity style = {[styles.button, {backgroundColor: '#F89E22'}]} onPress={()=>{this.props.navigation.navigate('ViewCalendar');}}>
                <Text style = {styles.buttonText}>View Calendar</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.button, {backgroundColor: '#22F885'}]} onPress={()=>{this.props.navigation.navigate('AddNewEvent');}}>
                <Text style = {styles.buttonText}>Add New Event or Task</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'space-evenly',
      marginLeft: 40,
      backgroundColor: 'white',
    },
    navigationControls:
    {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    text: {
      color: '#000000',
      fontSize: 26,
      //textAlign: 'center',
    },
    logo:{
      width: 200,
      height: 200,
      resizeMode: 'contain',
      justifyContent:'center'
    },
    button:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonText:{
        color:'#000000',
        margin: 10
    }
  });