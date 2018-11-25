import React from 'react';
import { Alert, TouchableHighlight, StyleSheet, Text, View, TextInput} from 'react-native';
import { DungeonMaster } from './../DungeonMaster'


export class ServerMainScreen extends React.Component {

  constructor(props) {
    super(props);
    Alert.alert(this.props.navigation.state.params.serverPort)
    server = new DungeonMaster(this.props.navigation.getParam('serverPort', 12345))
}



render() {
  return (
    <View style={styles.container}>
        <Text style = {styles.textLabel}>ALLO</Text>
        <View style={styles.buttonContainer}>
        </View> 
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white'
  },
  textLabel:{
      height: 50,
      fontSize: 18,
  },
  textBox: {
      color: 'grey',
      fontSize: 18,
      height: 50    
  },
  buttonText: {
      color: 'white',
      fontSize: 20
  },
  buttonContainer: {
      alignItems: 'flex-end'
  },
  button: {
      backgroundColor: 'grey',
      width: 100
  }
  });
