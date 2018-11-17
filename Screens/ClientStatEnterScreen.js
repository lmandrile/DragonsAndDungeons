import React from 'react';
import { Alert, TouchableHighlight, StyleSheet, Text, View, TextInput } from 'react-native';
import { Player } from '../Player';


export class ClientStatEnterScreen extends React.Component {

    constructor(props) {
        super(props);
        
        this.player = new Player(this.props.navigation.getParam('serverPortNumber', 12345))

        this.state = { playerNameState: 'Enter your real name', 
            charNameState: 'Enter you character\'s name',
            ppState: 'Enter PP',
            acState: 'Enter AC',
            maxHPState:'max hp'};
    }
     
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.line}>
                <Text style = {styles.textLabel}>Player name:</Text>
                <TextInput 
                    style = {styles.textBox}
                    onChangeText={(playerNameState) => this.setState({playerNameState})}
                    value={this.state.playerNameState}/>
            </View>
            <View style={styles.line}>
                <Text style = {styles.textLabel}>Character Name:</Text>
                <TextInput 
                    style = {styles.textBox}
                    onChangeText={(charNameState) => this.setState({charNameState})}
                    value={this.state.charNameState}/>
            </View>
            <View style={styles.line}>
                <Text style = {styles.textLabel}>AC:</Text>
                <TextInput 
                    style = {styles.textBox}
                    onChangeText={(acState) => this.setState({acState})}
                    value={this.state.acState}/>
            </View>
            <View style={styles.line}>
                <Text style = {styles.textLabel}>Passive perception:</Text>
                <TextInput 
                    style = {styles.textBox}
                    onChangeText={(ppState) => this.setState({ppState})}
                    value={this.state.ppState}/>
                
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
line: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 5,
    height: 50
},
textLabel:{
    height: 50,
    fontSize: 18,
},
textBox: {
    color: 'grey',
    fontSize: 18,
    height: 50
    
}
});

