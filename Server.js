
import {Client} from './Client.js'
import { TcpServer } from './TCPCommunication.js'
import { CommunicationPayload } from './CommunicationPayload.js'

export class Server {



    constructor(portNumber) {
        this.portNumber = portNumber
        this.playerList = []
        this.setupServer(portNumber)
    }

    addPlayer(player) {
        this.playerList.push(player)
    }

    _onData(data) {

        payload = JSON.parse(data);

        if( data.payloadType == "SuccessfulConnection" ) {
            this.confirmConnection()
        }

    }

    _onConnection(connection) {

    }

    _onError(error) {

    }

    setupServer(portNumber) {
        
        console.log("asd" +  portNumber)
        //Example server setup
        this.tcpServer = new TcpServer(parseInt(portNumber), 
            (connection) => this._onConnection(connection), 
            (data) => this._onData(data),
            (error) => this._onError(error));
    }

    async confirmConnection() {
        setTimeout(10000)
        this.tcpServer.write(JSON.stringify(new CommunicationPayload().setupSuccessfulConnectionPayload))
    }




}