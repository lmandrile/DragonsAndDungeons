import { TcpClient } from './TCPCommunication.js'
import { CommunicationPayload } from './CommunicationPayload.js'
var net = require('react-native-tcp');


export class Client{

    constructor(serverPortNumber, connectionCallback) {
        this.connectFunction = connectionCallback
        this.connectToServer(serverPortNumber)
    }
/*
    sendPlayerInfo(playerName, characterName, aC, passivePerception, maxHP) {
        this.tcpClient.write(new CommunicationPayload().setupPlayerInfoPayload(
            playerName,
            characterName,
            aC,
            passivePerception,
            maxHP
        ))
    }*/

    _onData(data) {
        console.log("Client: we got data: " + data);
        
        payload = JSON.parse(data);

        if( payload.payloadType == "SuccessfulConnection" ) {
            this.connectFunction()
        }
    }
    _onClose(close) {

    }

    _onError(error) {

    }

    connectToServer(serverPortNumber) {
        // Connect is not implemented yet in our tcpCom lib, do we need it? I don't think so.
        this.tcpClient = new TcpClient(parseInt(serverPortNumber), 
            (data) => this._onData(data),
            (close) => this._onClose(close),
            (error) => this._onError(error));
    }




}