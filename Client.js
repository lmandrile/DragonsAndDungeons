import { CommunicationPayload } from './CommunicationPayload.js'
var net = require('react-native-tcp');


export class Client {

    constructor(serverPortNumber, onMessageCallback, onErrorCallback, onCloseCallback) {

        this.onMessageCallback = onMessageCallback



        this.tcpClient = net.createConnection(parseInt(serverPortNumber));

        this.tcpClient.on('data', (data) => this._onData(data));
        this.tcpClient.on('close', () => onCloseCallback());
        this.tcpClient.on('error', (error) => onErrorCallback(error));

        console.log("[Client] we're connecting to port " + serverPortNumber);
    }

    write(data) {
        this.tcpClient.write(JSON.stringify(data))
    }

    _onData(data) {
        console.log("[Client] we got data: " + data);

        payload = JSON.parse(data);
        this.onMessageCallback(payload);
    }

}