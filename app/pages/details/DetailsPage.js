import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetailsPage extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Details',
      headerLeft:  null,
      headerRight: null,
      gesturesEnabled: false,
  }};

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Page</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }  
}