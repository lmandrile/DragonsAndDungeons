import { Client } from "./Client.js"
import { CommunicationPayload } from "./CommunicationPayload"

export class Player {

    constructor(serverPortNumber, serverIP, connectionCallback) {
        this.connectFunction = connectionCallback

        this.client = new Client(serverPortNumber,
            serverIP,
            this._onReceiveMessage.bind(this),
            this._onError.bind(this),
            this._onClose.bind(this))



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
        }
    }

    _onError(error) {
        console.log("[Client] We've got an error with server: " + error)
    }

    _onClose() {
        console.log("[Client] Connection to server closed")
    }


}