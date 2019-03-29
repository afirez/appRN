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
      headerTitle: 'Home',
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
      headerTitle: 'Profile',
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

export default AppBottomTabNavigator;