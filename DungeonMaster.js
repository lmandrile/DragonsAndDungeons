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

        sendingPlayerIndex = null

        this.playerList.forEach(element => {
            if (connection == element.connection) {
                sendingPlayerIndex = this.playerList.indexOf(element)
            }
        });
        if (sendingPlayerIndex != null) {
            if (message.payloadType == "PlayerInfo") {
                //Maybe check if playerinfo is valid?
                this.playerList[sendingPlayerIndex].addPlayerInfo(message.playerInfo)
                console.log("[Server] We recieved player[" + this.playerList[sendingPlayerIndex].playerNumber + "]'s player info: \n"
                    + JSON.stringify(this.playerList[sendingPlayerIndex].playerInfo))
            }
            else if (message.payloadType == "TestPayload") {
                console.log("[Server] We recieved a test message from player[" + this.playerList[sendingPlayerIndex].playerNumber + "].")
            }
        }
        else {
            console.log("[Server] Sending player was not in player list.")
        }

    }

    _onError(error, connection) {

    }

    _onClose(connection) {

    }


}