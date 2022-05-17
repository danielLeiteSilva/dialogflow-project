const MessageModel = require("../model/MessageModel")
const messageModel = new MessageModel()

class MessageController {

    execute(req, res) {
        try {
            
            const parameters = req.body.queryResult.parameters
            let result = messageModel.message(parameters)
            res.status(200).json(result)

        } catch (error) {
            res.status(400).json({ error: error, statusCode: 400 })
        }
    }
}

module.exports = new MessageController