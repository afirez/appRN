import { 
  createAppContainer, 
  createStackNavigator, 
} from 'react-navigation';
import MainPage from './home/MainPage'
import DetailsPage from './details/DetailsPage'

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainPage,
  },
  Details: {
    screen: DetailsPage,
  },
}, {
  initialRouteName: 'Main',
  // defaultNavigationOptions : {
  //   headerLeft:  (<View></View>),
  // },
});

export default createAppContainer(AppNavigator);