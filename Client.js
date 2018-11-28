var net = require('react-native-tcp');


export class Client {

    constructor(serverPortNumber, serverIP, onMessageCallback, onErrorCallback, onCloseCallback) {

        this.onMessageCallback = onMessageCallback


        this.log("we're trying to connect to IP: " + serverIP + " On port: "+ serverPortNumber)
        this.tcpClient = net.createConnection(parseInt(serverPortNumber), serverIP);

        this.tcpClient.on('data', (data) => this._onData(data));
        this.tcpClient.on('close', () => onCloseCallback());
        this.tcpClient.on('error', (error) => onErrorCallback(error));
    }

    write(data) {
        this.tcpClient.write(JSON.stringify(data))
    }

    _onData(data) {
        this.log("we got data: " + data);

        payload = JSON.parse(data);
        this.onMessageCallback(payload);
    }

    log(string) {
        console.log("[Client] " + string)
    }

}