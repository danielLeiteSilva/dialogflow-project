class MessageController {

    message(req, res) {

        const data = req.body

        console.log( data )
        res.status(200).json({ ...data })

    }

}

module.exports = MessageController