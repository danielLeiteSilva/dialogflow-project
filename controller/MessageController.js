const MessageModel = require("../model/MessageModel")
const FollowupEventInputModel = require("../model/FollowupEventInputModel")
const FullFillmentModel = require("../model/FullFillmentModel")
const TextModel = require("../model/TextModel")

const messageModel = new MessageModel()


class MessageController {

    execute(req, res) {
        try {

            if (req.body.queryResult.action === "MarcarConsulta.MarcarConsulta-custom") {
                const parameters = req.body.queryResult.outputContexts[2].parameters
                let result = messageModel.message(parameters)
                res.status(200).json(result)
                
            } else {

                const fullFillment = new FullFillmentModel()
                const followupEventInput = new FollowupEventInputModel()
                const text = new TextModel()

                text.setTextObject("ok")
                fullFillment.setObjectText(text)
                followupEventInput.setNameObject("dados")
            
                res.status(200).json({ ...fullFillment, ...followupEventInput })
            }
        } catch (error) {
            res.status(400).json({ error: error, statusCode: 400 })
        }
    }
}

module.exports = new MessageController