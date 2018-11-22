

export class CommunicationPayload {

    constructor() {
        this.payloadType = "None"
    }

    setupPlayerInfoPayload(playerName, characterName, aC, passivePerception, maxHP) {
        this.payloadType = "PlayerInfo"
        this.playerName = playerName
        this.characterName = characterName
        this.aC = aC
        this.passivePerception = passivePerception
        this.maxHP = maxHP
    }

    setupSuccessfulConnectionPayload() {
        this.payloadType = "SuccessfulConnection"
    }

}