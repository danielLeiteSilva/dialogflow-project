const MessageModel = require("../model/MessageModel")

class MessageController {

    execute(req, res) {
        try {
            
            const messageModel = new MessageModel()
            let result = messageModel.message(req, res)
            res.status(200).json(result)

        } catch (error) {
            res.status(400).json({ error: error, statusCode: 400 })
        }
    }
}

module.exports = new MessageController