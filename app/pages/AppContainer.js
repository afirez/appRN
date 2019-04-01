import { 
  createAppContainer, 
  createStackNavigator, 
} from 'react-navigation';
// import StackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator.js'
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
  // transitionConfig: () => ({
  //   //设置横向切换动画
  //   screenInterpolator: StackStyleInterpolator.forHorizontal
  // })
});

export default createAppContainer(AppNavigator);