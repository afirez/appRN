import { 
  createAppContainer, 
  createStackNavigator, 
} from 'react-navigation';
import React, { Component } from 'react';
// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import MainPage from './pages/home/MainPage'
import DetailsPage from './pages/details/DetailsPage'
import NavigationService from './utils/NavigationService'

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainPage,
  },
  Details: {
    screen: DetailsPage,
  },
}, {
  initialRouteName: 'Main',
  // transitionConfig: () => ({
  //   //设置横向切换动画
  //   screenInterpolator: CardStackStyleInterpolator.forHorizontal
  // })
});

const AppContainer = createAppContainer(AppStackNavigator);

export default class AppNavigator extends Component{
	render() {
		return (
			<AppContainer ref={navigatorRef => {NavigationService.setNavigator(navigatorRef);}}/>
		)
	}
}