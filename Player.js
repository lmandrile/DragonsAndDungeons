import { TcpClient } from './TCPCommunication.js'
import { CommunicationPayload } from './CommunicationPayload.js'

export class Player{

    constructor(serverPortNumber, connectionCallback) {
        this.connectFunction = connectionCallback
        this.connectToServer(serverPortNumber)
    }

    sendPlayerInfo(playerName, characterName, aC, passivePerception, maxHP) {
        this.tcpClient.write(new CommunicationPayload().setupPlayerInfoPayload(
            playerName,
            characterName,
            aC,
            passivePerception,
            maxHP
        ))
    }

    connectToServer(serverPortNumber) {
        // TODO: complete emptyfunctions 
        this.tcpClient = new TcpClient(parseInt(serverPortNumber), 
            function(data) {
                //On data
                this.parseRecievedData(data)
                
            }, function() {
                // On close
            }, function(){
                // On error

            });
        this.tcpClient.write('Here is some data');
        // Add blocking wait here
    }


    parseRecievedData(data) {
        payload = JSON.parse(data);

        if( data.payloadType == "SuccessfulConnection" ) {
            this.connectFunction()
        }
    }

}