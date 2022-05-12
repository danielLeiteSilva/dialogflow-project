class MessageController {

    message(req, res) {

        const data = req.body


        const object = {
            fulfillmentMessages: [
              {
                text: {
                  text: [
                    "Não temos vagas"
                  ]
                }
              }
            ]
          }

        console.log( data )
        res.status(200).json({ ...object })

    }

}

module.exports = MessageController