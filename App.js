import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import { Constants } from 'expo';

// You can import from local files
import FirstPage from './components/FirstPage';
import HomeScreen from './components/HomeScreen';

const rootStack = createStackNavigator({
  FirstPage:FirstPage,
  Home:HomeScreen,
},
{
  initialRouteName: 'FirstPage'
}
)

const AppContainer = createAppContainer(rootStack)


export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    
    return ( 
        <AppContainer />
    );
  }
};
