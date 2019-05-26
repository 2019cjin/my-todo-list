import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Facebook } from 'expo';

const FB_APP_ID = 'fb297781467791687';
//facebook links used:
//https://docs.expo.io/versions/latest/sdk/facebook/
//https://www.youtube.com/watch?v=ThcelIFSMWQ
//https://stackoverflow.com/questions/38261112/facebook-redirect-uri-set-to-ios-url-scheme

export default class FirstPage extends React.Component {

  //for facebook login
  async logIn() {
    try {
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync('297781467791687', {
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            this.props.navigation.navigate('Home');
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }
    render() {
      return (
        <View style={styles.container}>
          <Text style = {styles.text}>My TODO List</Text>
          <Image style = {styles.logo} source ={require('../images/logo.png')}/>
          <TouchableOpacity style = {styles.button} onPress={()=>{this.logIn()}}>
            <Text style = {styles.buttonText}>Login</Text>
          </TouchableOpacity>
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
      justifyContent:'center',
    },
    button:{
      backgroundColor: '#F89E22',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      width: 150,
      height: 80,
      justifyContent: 'center'
    },
    buttonText:{
      fontSize: 25,
      textAlign: 'center',
      justifyContent: 'center'
    }
  });