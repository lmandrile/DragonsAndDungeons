

export class CommunicationPayload {

    constructor() {
        this.payloadType = "None"
    }

    setupPlayerInfoPayload(playerInfo) {
        this.payloadType = "PlayerInfo"
        this.playerInfo = playerInfo
        return this

    }

    setupSuccessfulConnectionPayload() {
        this.payloadType = "SuccessfulConnection"
        return this
    }

    setupTestPayload() {
        this.payloadType = "TestPayload"
        return this
    }

    
}

export class PlayerInfo {
    
    constructor(playerName, characterName, aC, passivePerception, maxHP) {
        this.playerName = playerName
        this.characterName = characterName
        this.aC = aC
        this.passivePerception = passivePerception
        this.maxHP = maxHP
    }
}