import React from 'react';
import { View, Text, Button } from 'react-native';


export default class ProfilePage extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle:navigation.state.params ? navigation.state.params.title : 'Profile',
      headerLeft:  <View></View>,
      headerRight: <View></View>,
      // gesturesEnabled: false,
  }};

  render() {
    const {navigation} = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Page</Text>
        <Button
          title="Dynamic Update Title" 
          onPress={() => navigation.setParams({title: "Profile Update"})}/>
      </View>
    );
  }  
}