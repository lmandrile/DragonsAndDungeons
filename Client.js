import { TcpClient } from './TCPCommunication.js'
import { CommunicationPayload } from './CommunicationPayload.js'

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
        payload = JSON.parse(data);

        if( data.payloadType == "SuccessfulConnection" ) {
            this.connectFunction()
        }
    }
    _onClose(close) {

    }

    _onError(error) {

    }

    connectToServer(serverPortNumber) {
        // TODO: complete emptyfunctions 
        this.tcpClient = new TcpClient(parseInt(serverPortNumber), 
            (data) => this._onData(data),
            (close) => this._onClose(close),
            (error) => this._onError(error));

        
        this.tcpClient.write(JSON.stringify(new CommunicationPayload().setupSuccessfulConnectionPayload()))
        // Add blocking wait here
    }




}