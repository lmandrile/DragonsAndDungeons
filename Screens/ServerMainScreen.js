import React from 'react';
import { Alert, TouchableHighlight, StyleSheet, Text, View, TextInput } from 'react-native';
import { NetworkInfo } from 'react-native-network-info';
import { DungeonMaster } from './../DungeonMaster'


export class ServerMainScreen extends React.Component {
    constructor(props) {
        super(props);

        var self = this

        server = new DungeonMaster(this.props.navigation.getParam('serverPort'))
        // Get Local IP
        this.state = {serverIP: "NOIP" }
        NetworkInfo.getIPAddress(function(ip) {
            self.setState({ serverIP: ip });
        })       
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textLabel}>{this.state.serverIP}</Text>
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
