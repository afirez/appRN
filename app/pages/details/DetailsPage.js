import React from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '../../utils/NavigationService';

export default class DetailsPage extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state
    return {
      headerTitle: params ? params.title :'Details',
      // headerTitle: null,
      // headerLeft:  <View></View>,
      // headerRight: null,
      // gesturesEnabled: false,
  }};

  render() {
    const {navigation} = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Page</Text>
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ title: 'Details Updated' })}
        />
        <Button
          title="Go back"
          onPress={() => NavigationService.goBack()}
        />
      </View>
    );
  }  
}