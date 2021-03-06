import React from 'react';
import { TouchableHighlight, Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { Player } from './../Player'

export class ClientServerSelectScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            serverPortNumber: '12345',
            serverIP: '192.168.'
        };
    }

    _onPress() {
        this.player = new Player(this.state.serverPortNumber,
            this.state.serverIP,
            this._onConnectCallback.bind(this))
    }

    _onConnectCallback() {
        this.props.navigation.navigate('clientStatEnterScreen', { player: this.player })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textLabel}>Enter the host's chosen connection code:</Text>
                <TextInput
                    style={styles.textBox}
                    onChangeText={(serverPortNumber) => this.setState({ serverPortNumber })}
                    value={this.state.serverPortNumber} />
                <TextInput
                    style={styles.textBox}
                    onChangeText={(serverIP) => this.setState({ serverIP })}
                    value={this.state.serverIP} />
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        onPress={() => this._onPress()}
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
    textLabel: {
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

