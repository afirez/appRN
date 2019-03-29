import React from 'react';
import { View, Text, Button } from 'react-native';
import { 
  StackActions, 
  NavigationActions,
} from 'react-navigation'; // Version can be specified in package.json

export default class HomePage extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params ? navigation.state.params.title : 'Home',
      // headerTitle: null,
      // headerLeft:  null,
      // headerRight: null,
      // gesturesEnabled: false,
  }};

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
                NavigationActions.navigate({ 
                  routeName: "Details",
                  params: {
                    title: "Details",
                    // headerTitle: "Details",
                  }
                })
              ],
            }))
          }}
        />
      </View>
    );
  }  
}