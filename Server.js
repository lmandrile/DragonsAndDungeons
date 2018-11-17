
import {Player} from './Player.js'
import { TcpServer } from './TCPCommunication.js'


export class Server {



    constructor(portNumber) {
        this.portNumber = portNumber
        this.playerList = []
        this.setupServer(portNumber)
    }

    addPlayer(player) {
        this.playerList.push(player)
    }

    setupServer(portNumber) {
        
        console.log("asd" +  portNumber)
        //Example server setup
        this.tcpServer = new TcpServer(parseInt(portNumber), function(connection){
        //Alert.alert("we got something")
        }, function(data) {
            //Alert.alert(""  + data);
        },
        function(error) {
        //Alert.alert("Got an error");
        });
  
    }



}