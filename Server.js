import { CommunicationPayload } from './CommunicationPayload.js'

var net = require('react-native-tcp');

export class Server {

    constructor(portNumber, onConnectionCallback, onMessageCallback, onErrorCallback, onCloseCallback) {
        this.onMessageCallback = onMessageCallback
        this.onErrorCallback = onErrorCallback
        this.onCloseCallback = onCloseCallback
        this.onConnectionCallback = onConnectionCallback

        this.tcpServer = net.createServer((s) => {
            this._onConnection(s);
            s.on('data', (data) => {/*Empty because we don't really need a global 
        data function as we are doing per socket*/});
            s.on('error', (error) => {/*Global error, we should put something here TODO*/ });
        })
        this.tcpServer.listen(parseInt(portNumber));
        console.log("[Server] we're listening on port " + portNumber);

    }

    _onSingleSocketData(data, connection) {

        console.log("[Server] we got data: " + data);

        payload = JSON.parse(data);

        this.onMessageCallback(payload, connection)

    }

    _onSingleSocketError(error, connection) {

    }

    _onConnection(connection) {

        console.log("[Server] we got a connection")

        connection.on('data', (data) => {
            this._onSingleSocketData(data, connection)
        });

        connection.on('error', (error) => {
            this._onSingleSocketError(error, connection)
        });

        connection.on('close', () => {

        });

        this.onConnectionCallback(connection)

    }
    /*
        async confirmConnection() {
            setTimeout(10000)
            this.tcpServer.write(JSON.stringify(new CommunicationPayload().setupSuccessfulConnectionPayload()))
        }*/




}