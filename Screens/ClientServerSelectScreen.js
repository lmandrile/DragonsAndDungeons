import React from 'react';
import { TouchableHighlight, Button, StyleSheet, Text, View, TextInput } from 'react-native';
import {tcpServer, tcpClient} from './../TCPCommunication.js'


export class ClientServerSelectScreen extends React.Component {


    constructor(props) {
        super(props);        
        this.state = { serverPort: '12345'};
    }
    

    _onPressClientButton() {
      //Alert.alert("Start client!")

      // TODO: complete emptyfunctions 
      tcppClient = new tcpClient(this.state.serverPort, function(){}, function(){}, function(){})
      tcppClient.write('Here is some data');
    }
  
    render() {
      return (
        <View style={styles.container}>
                <Text style = {styles.textLabel}>Enter the host's chosen connection code:</Text>
                <TextInput 
                    style = {styles.textBox}
                    onChangeText={(serverPort) => this.setState({serverPort})}
                    value={this.state.serverPort}/>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight 
                        onPress={this._onPressClientButton()} 
                        underlayColor="white" 
                        style={styles.button}>
                        <Text style={styles.buttonText}>Connect</Text>
                    </TouchableHighlight>
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

