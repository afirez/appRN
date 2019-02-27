import React from 'react';
import { View, Text, Button } from 'react-native';
import { 
  createAppContainer, 
  createStackNavigator, 
  StackActions, 
  NavigationActions,
  createBottomTabNavigator  
} from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomePage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Page</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />
      </View>
    );
  }  
}

class DetailsPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Page</Text>
      </View>
    );
  }  
}

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomePage,
//     navigationOptions: {
//       headerTitle:'Home',
//     } 
//   },
//   Details: {
//     screen: DetailsPage,
//     navigationOptions: {
//       headerTitle:'Details'
//     }
//   },
// }, {
//     initialRouteName: 'Home',
// });
// export default createAppContainer(AppNavigator);

class ProfilePage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Page</Text>
      </View>
    );
  }  
}

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

export default createAppContainer(AppBottomTabNavigator);