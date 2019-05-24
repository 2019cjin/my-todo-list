import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class FirstPage extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>My TODO List</Text>
          <Image source ={require('../images/logo.png')}/>
          <Button>Login</Button>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });