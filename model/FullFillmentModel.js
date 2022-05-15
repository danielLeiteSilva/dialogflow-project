class FullFillmentModel{

    constructor(){
        this.fulfillmentMessages = new Array()
    }

    setObjectText(textObject){
        this.fulfillmentMessages.push(textObject)
    }

    getObjectText(){
        return this.fulfillmentMessages
    }
}

module.exports = FullFillmentModel