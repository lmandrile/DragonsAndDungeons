import { Server } from "./Server.js"

class PlayerSeenByServer {
    constructor(connection) {
        this.connection
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
        this.playerList.push(new PlayerSeenByServer(connection))
        connection.write(JSON.stringify(new CommunicationPayload().setupSuccessfulConnectionPayload()))
    }

    _onReceiveMessage(message, connection) {
        //TODO find player based on connection
        if (payload.payloadType == "SuccessfulConnection") {
            //this.confirmConnection()
            //connection.write(JSON.stringify(new CommunicationPayload().setupSuccessfulConnectionPayload()))
        }
        else {

        }

    }

    _onError(error, connection) {

    }

    _onClose(connection) {

    }


}