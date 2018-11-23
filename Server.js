
import { Client } from './Client.js'
import { TcpServer } from './TCPCommunication.js'
import { CommunicationPayload } from './CommunicationPayload.js'

var net = require('react-native-tcp');

export class Server {



    constructor(portNumber) {
        this.portNumber = portNumber
        this.playerList = []
        this.connectionList = []
        this.setupServer(portNumber)
    }

    addPlayer(player) {
        this.playerList.push(player)
    }

    _onData(data, connection) {

        console.log("Server: we got data: " + data);

        payload = JSON.parse(data);
        
        if (payload.payloadType == "SuccessfulConnection") {
            //this.confirmConnection()
            //connection.write(JSON.stringify(new CommunicationPayload().setupSuccessfulConnectionPayload()))
        }
        else {
            
        }

    }

    _onError(error, connection) {

    }
    _onConnection(connection) {
        this.connectionList.push(connection)
        console.log("Server: we got a connection")

        connection.on('data', (data) => {
            this._onData(data, connection)
        });

        connection.on('error', (error) => {
            this._onError(error, connection)
        });

        connection.on('close', (error) => {

        });

        connection.write(JSON.stringify(new CommunicationPayload().setupSuccessfulConnectionPayload()))
    }



    setupServer(portNumber) {
        //Example server setup
        this.tcpServer = new TcpServer(parseInt(portNumber),
            (connection) => this._onConnection(connection),
            () => {/*Empty because we don't really need a global 
                    data function as we are doing per socket*/},
            () => {/*Global error, we should put something here TODO*/ });
    }

    async confirmConnection() {
        setTimeout(10000)
        this.tcpServer.write(JSON.stringify(new CommunicationPayload().setupSuccessfulConnectionPayload()))
    }




}