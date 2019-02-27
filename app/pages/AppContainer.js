import { 
  createAppContainer, 
  createStackNavigator, 
} from 'react-navigation';
import MainPage from './home/MainPage'
import DetailsPage from './details/DetailsPage'

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainPage,
    navigationOptions: {
      headerTitle:'Home',
    } 
  },
  Details: {
    screen: DetailsPage,
    navigationOptions: {
      headerTitle:'Details'
    }
  },
}, {
  initialRouteName: 'Main',
    /* 这里定义的头部样式对栈中的每个屏幕生效除非那个屏幕类覆盖了改定义 */
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default createAppContainer(AppNavigator);