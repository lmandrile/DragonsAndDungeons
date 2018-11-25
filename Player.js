import { Client } from "./Client.js"
import { CommunicationPayload } from "./CommunicationPayload"

export class Player {

    constructor(serverPortNumber, connectionCallback) {
        this.connectFunction = connectionCallback

        this.client = new Client(serverPortNumber,
            this._onReceiveMessage.bind(this),
            this._onError.bind(this),
            this._onClose.bind(this))

        this.client.write(new CommunicationPayload().setupSuccessfulConnectionPayload())
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

    _onReceiveMessage(payload) {
        if (payload.payloadType == "SuccessfulConnection") {
            this.connectFunction()
        }
    }

    _onError(error) {
        console.log("Client: We've got an error with server: " + error)
    }

    _onClose(close) {
        console.log("Client: Connection to server closed")
    }


}