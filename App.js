import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import { Constants } from 'expo';

// You can import from local files
import FirstPage from './components/FirstPage';

const rootStack = createStackNavigator({
  FirstPage:FirstPage,
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
