import React from 'react';
import {  
  createBottomTabNavigator  
} from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'

const AppBottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      tabBarLable: 'Home',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons 
          name={focused ? 'ios-home' : 'md-home'}
          size={26}
          style={focused? {color: tintColor}: {color: '#f00'}}>
        </Ionicons>
      ),
    }
  },
  Profile: {
    screen: ProfilePage,
    navigationOptions: {
      tabBarLable: 'Profile',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons 
          name={'ios-aperture'}
          size={26}
          style={{color: tintColor}}>
        </Ionicons>
      ),
    }
  }
});

/**
 * - AppContainer ( AppMavigator )
 *   - AppNavigator ( StackMavigator )
 *     - AppBottomTabNavigator ( BottomTabNavigator )
 *       - HomePage
 *       - ProfilePage
 *     - DetailsPage
 * 
 * - navigationOptions in AppBottomTabNavigator and DetailsPage can update header of AppNavigator derectly.
 * - navigationOptions in HomePage and ProfilePage can not update header of AppNavigator derectly.
 */
AppBottomTabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName;

  return {
    headerTitle,
  };
};

export default AppBottomTabNavigator;