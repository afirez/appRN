import React, { Component } from 'react';
import AppContainer from './AppContainer'
import NavigationService from '../utils/NavigationService'

export default class App extends Component {

  componentDidMount() {
    NavigationService.setNavigator(this.props.navigation)
  }

  render() {
    return (
      <AppContainer ref={navigatorRef => {
        NavigationService.setNavigator(navigatorRef)
      }}>
      </AppContainer>
    );
  }
}