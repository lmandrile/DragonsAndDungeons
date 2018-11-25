import { CommunicationPayload } from './CommunicationPayload.js'
var net = require('react-native-tcp');


export class Client {

    constructor(serverPortNumber, onMessageCallback, onErrorCallback, onCloseCallback) {

        this.onMessageCallback = onMessageCallback



        this.client = net.createConnection(parseInt(serverPortNumber));
        this.client.on('data', (data) => this._onData(data));
        this.client.on('close', onCloseCallback(close));
        this.client.on('error', onErrorCallback(error));

        console.log("Client: we're connecting to port " + serverPortNumber);
    }


    _onData(data) {
        console.log("Client: we got data: " + data);

        payload = JSON.parse(data);
        onMessageCallback(payload);
    }

}