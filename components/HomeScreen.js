import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class HomeScreen extends React.Component {
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