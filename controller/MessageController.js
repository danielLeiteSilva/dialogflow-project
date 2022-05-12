const MessageModel = require("../model/MessageModel")

class MessageController {

    message(req, res) {
        try {
            
            const messageModel = new MessageModel()
            messageModel.message(req, res)

        } catch (error) {
            res.status(400).json({ error, statusCode: 400 })
        }
    }
}

module.exports = new MessageController