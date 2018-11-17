import { TcpClient } from './TCPCommunication.js'

export class Player{

    constructor(serverPortNumber) {
        this.connectToServer(serverPortNumber)
    }

    connectToServer(serverPortNumber) {
        // TODO: complete emptyfunctions 
        this.tcpClient = new TcpClient(parseInt(serverPortNumber), function(){}, function(){}, function(){})
        this.tcpClient.write('Here is some data');
    }
}