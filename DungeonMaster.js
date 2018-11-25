import { Server } from "./Server.js";
import { CommunicationPayload } from "./CommunicationPayload.js";

class PlayerSeenByServer {
    constructor(connection, playerNumber) {
        this.connection = connection
        this.playerNumber = playerNumber
    }

    addPlayerInfo(playerInfo) {
        this.playerInfo = playerInfo
    }
}

export class DungeonMaster {

    constructor(serverPortNumber) {
        this.Server = new Server(serverPortNumber,
            this._onConnection.bind(this),
            this._onReceiveMessage.bind(this),
            this._onError.bind(this),
            this._onClose.bind(this))
        this.playerList = []
    }

    _onConnection(connection) {
        this.playerList.push(new PlayerSeenByServer(connection, this.playerList.length))
        connection.write(JSON.stringify(new CommunicationPayload().setupSuccessfulConnectionPayload()))
    }

    _onReceiveMessage(message, connection) {

        sendingPlayer = null

        this.playerList.forEach(element => {
            if (connection == element.connection) {
                sendingPlayer = element
            }
        });
        if (sendingPlayer != null) {
            if (payload.payloadType == "SuccessfulConnection") {
                //this.confirmConnection()
                //connection.write(JSON.stringify(new CommunicationPayload().setupSuccessfulConnectionPayload()))
            }
            else if (payload.payloadType == "TestPayload") {
                console.log("[Server] We recieved a test payload from player[" + sendingPlayer.playerNumber + "].")
            }
        }
        else 
        {
            console.log("[Server] Sending player was not in player list.")
        }

    }

    _onError(error, connection) {

    }

    _onClose(connection) {

    }


}