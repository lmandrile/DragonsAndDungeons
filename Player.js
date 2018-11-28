import { Client } from "./Client.js"
import { CommunicationPayload } from "./CommunicationPayload"

export class Player {

    constructor(serverPortNumber, serverIP, connectionCallback, onServerCloseCallback = null, onErrorCallback = null) {
        this.connectFunction = connectionCallback

        this.client = new Client(serverPortNumber,
            serverIP,
            this._onReceiveMessage.bind(this),
            this._onError.bind(this),
            this._onClose.bind(this))

        this.onServerCloseCallback = onServerCloseCallback
        this.onErrorCallback = onErrorCallback

    }


    sendPlayerInfo(playerName, characterName, aC, passivePerception, maxHP) {
        this.client.write(new CommunicationPayload().setupPlayerInfoPayload(
            playerName,
            characterName,
            aC,
            passivePerception,
            maxHP
        ))
    }

    _onReceiveMessage(payload) {
        if (payload.payloadType == "SuccessfulConnection") {
            this.connectFunction()
            //Send test payload to let server know if his player detection works
            this.client.write(new CommunicationPayload().setupTestPayload())
        } else if (payload.payloadType == "Close") {
            this.onServerCloseCallback()
        }
    }

    _onError(error) {
        this.client.log("We've got an error with server: " + error)
        this.onErrorCallback()
    }

    _onClose() {
        this.client.log("Connection to server closed")
        this.client.write(new CommunicationPayload().setupClosePayload())
    }


}