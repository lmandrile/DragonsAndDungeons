import React from 'react';
import { Alert, TouchableHighlight, StyleSheet, Text, View } from 'react-native';



export class MainMenuScreen extends React.Component {

  
    render() {
      return (
        <View style={styles.container}>
          <TouchableHighlight 
          onPress={() => this.props.navigation.navigate('serverEnterPortScreen')} 
          underlayColor="white" 
          style={[styles.button, {backgroundColor: 'red'}]}
          >
            <Text style={styles.buttonText}>Start Server</Text>
          </TouchableHighlight>
          <TouchableHighlight 
          onPress={() => this.props.navigation.navigate('clientServerSelectScreen')} 
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

