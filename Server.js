
import {Player} from './Player.js'
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

    parseRecievedData(data) {

    }
    setupServer(portNumber) {
        
        console.log("asd" +  portNumber)
        //Example server setup
        this.tcpServer = new TcpServer(parseInt(portNumber), function(connection){
            //Alert.alert("we got something")
            this.confirmConnection(connection)
            }, 
            function(data) {
            //Alert.alert(""  + data);
            this.parseRecievedData(data)
        },
        function(error) {
        //Alert.alert("Got an error");
        });
    }

    async confirmConnection(connection) {
        setTimeout(10000)
        connection.write(JSON.stringify(new CommunicationPayload().setupSuccessfulConnectionPayload))
    }




}