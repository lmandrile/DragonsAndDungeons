import React from 'react';
import { Alert, TouchableHighlight, StyleSheet, Text, View } from 'react-native';


export class MainMenu extends React.Component {

    _onPressServerButton() {
      Alert.alert("Start server!")
      // TODO: start server and go to DM page
    }
  
    _onPressClientButton() {
      Alert.alert("Start client!")
      // TODO: start client and go to player page
    }
  
    render() {
      return (
        <View style={styles.container}>
          <TouchableHighlight 
          onPress={this._onPressServerButton} 
          underlayColor="white" 
          style={[styles.button, {backgroundColor: 'red'}]}
          >
            <Text style={styles.buttonText}>Start Server</Text>
          </TouchableHighlight>
          <TouchableHighlight 
          onPress={this._onPressClientButton} 
          underlayColor="white" 
          style={[styles.button, {backgroundColor: 'blue'}]}
          >
            <Text style={styles.buttonText}>Start client</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
container: {
    alignItems: 'stretch',
    flex: 1,
    backgroundColor: '#000000'
},
button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 0
},
buttonText: {
    color: 'white',
    fontSize: 30
}
});