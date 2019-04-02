import {StatusBar, View} from 'react-native'
import React, { Component } from 'react';
import AppNavigator from './AppNavigator'

export default class App extends Component {

  // componentDidMount() {
  //   NavigationService.setNavigator(this.props.navigation)
  // }

  render() {
    return (
      <View style={{flex: 1}}>
				<StatusBar hidden={true} />
        <AppNavigator />
			</View>
    );
  }
}