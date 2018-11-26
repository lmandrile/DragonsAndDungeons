import { CommunicationPayload } from './CommunicationPayload.js'
var net = require('react-native-tcp');


export class Client {

    constructor(serverPortNumber, serverIP, onMessageCallback, onErrorCallback, onCloseCallback) {

        this.onMessageCallback = onMessageCallback


        console.log("[Client] we're trying to connect to IP: " + serverIP + "On port: "+ serverPortNumber)
        this.tcpClient = net.createConnection(parseInt(serverPortNumber), serverIP);

        this.tcpClient.on('data', (data) => this._onData(data));
        this.tcpClient.on('close', () => onCloseCallback());
        this.tcpClient.on('error', (error) => onErrorCallback(error));
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