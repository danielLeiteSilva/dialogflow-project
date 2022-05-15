const FullFillmentModel = require("./FullFillmentModel")
const TextModel = require("./TextModel")

class MessageController {

    message(req, res) {

        const action = req.body.queryResult.action
        const fullFillment = new FullFillmentModel()
        const text = new TextModel()

        if(action == "input.hour"){
            
        }

       
        // text.setTextObject(["ola", "oi"])
        // fullFillment.setObjectText(text)
        
        return res.status(200).json({ ...fullFillment })


    }

}

module.exports = MessageController