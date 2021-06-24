import React, {Component} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs'  
import Facebook_screen from './screens/fb'
import Instagram_screen from './screens/ins'

export default class App extends Component{
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer/>
       
      </View>
    )
  }
}

var TabContainer = createBottomTabNavigator({
  Facebook_screen  : Facebook_screen ,
  Instagram_screen : Instagram_screen 
})
const Appcontainer = createAppContainer(TabContainer)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


