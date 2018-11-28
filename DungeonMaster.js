import { Server } from "./Server.js";
import { CommunicationPayload } from "./CommunicationPayload.js";
import { Player } from "./Player.js";

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

    constructor(serverPortNumber, onPlayerDCCallback = null, onErrorCallback = null) {
        this.server = new Server(serverPortNumber,
            this._onConnection.bind(this),
            this._onReceiveMessage.bind(this),
            this._onError.bind(this),
            this._onClose.bind(this));
        
        //TODO implement callbacks in front end
        this.onPlayerDCCallback = onPlayerDCCallback
        this.onErrorCallback = onErrorCallback
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
                sendingPlayer = this.playerList[this.playerList.indexOf(element)]
            }
        });
        if (sendingPlayer != null) {
            if (message.payloadType == "PlayerInfo") {
                //Maybe check if playerinfo is valid?
                sendingPlayer.addPlayerInfo(message.playerInfo)

                this.server.log("We recieved player[" + sendingPlayer.playerNumber + "]'s player info: \n"
                    + JSON.stringify(sendingPlayer.playerInfo))

                //TODO Send info to front-end                
            }
            else if (message.payloadType == "Close") {
                this.onPlayerDCCallback(sendingPlayer)
            }
            else if (message.payloadType == "TestPayload") {
                this.server.log("We recieved a test message from player[" + sendingPlayer.playerNumber + "].")
            }
        }
        else {
            this.server.log("Sending player was not in player list.")
        }
    }

    _onError(error, connection) {
        this.onErrorCallback(error)
    }

    _onClose(close) {
        this.playerList.forEach((player) => {
            player.connection.write(new CommunicationPayload().setupClosePayload())
        })
    }


}