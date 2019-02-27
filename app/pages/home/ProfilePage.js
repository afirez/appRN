import React from 'react';
import { View, Text } from 'react-native';


export default class ProfilePage extends React.Component {

  componentDidMount(props) {
    this.props.navigation.setParams({
      navigation: {
          headerTitle: "Profile",
      }
    });
  }

  static navigationOptions = ({navigation, navigationOptions}) => {
    const { params } = navigation.state;
    
    return {
      headerTitle: 'Profile',
      headerLeft:  null,
      headerRight: null,
      gesturesEnabled: false,
  }};

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Page</Text>
      </View>
    );
  }  
}