import React from 'react';
import { Alert, StyleSheet, Text, View, Button, Image } from 'react-native';
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
          <Button title = "Login" onPress={()=>{this.logIn()}}></Button>
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