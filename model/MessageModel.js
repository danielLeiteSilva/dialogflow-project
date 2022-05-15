const FullFillmentModel = require("./FullFillmentModel")
const TextModel = require("./TextModel")

class MessageController {

    message(req, res) {

        const action = req.body.queryResult.action
        const parameters = req.body.queryResult.parameters
        
        const fullFillment = new FullFillmentModel()
        const text = new TextModel()

        

        return res.status(200).json({ ...fullFillment })

    }

}

module.exports = MessageController