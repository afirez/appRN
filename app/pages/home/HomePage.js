import React from 'react';
import { View, Text, Button } from 'react-native';
import { 
  StackActions, 
  NavigationActions,
} from 'react-navigation'; // Version can be specified in package.json
import NavigationService from '../../utils/NavigationService';

export default class HomePage extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params ? navigation.state.params.title : 'Home',
      headerTitle: navigation.state.params ? navigation.state.params.title : 'Home',
      // headerTitle: null,
      headerLeft:  <View></View>,
      // headerRight: null,
      // gesturesEnabled: false,
  }};

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Page</Text>
        <Button
          title="Go to Details"
          onPress={() => {NavigationService.navigate("Details",{title: "Details"})}}
        />
      </View>
    );
  }  
}