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
    /* 这里定义的头部样式对栈中的每个屏幕生效除非那个屏幕类覆盖了改定义 */
  navigationOptions: {
    header: null,
  },
});

export default createAppContainer(AppNavigator);