const FullFillmentModel = require("./FullFillmentModel")
const TextModel = require("./TextModel")

class MessageController {

    message(req, res) {

        const action = req.body.queryResult.action
        const parameters = req.body.queryResult.parameters
        
        let [ especialist, idEspecialista ] = parameters.especialista.split(",")
        let [ local, idLocal ] = parameters.local.split(",")
        let dateAgendament = new Date(parameters.data)
        let hourAgendament = new Date(parameters.hour)

        console.log(idEspecialista, idLocal, dateAgendament, hourAgendament.getHours())


        const fullFillment = new FullFillmentModel()
        const text = new TextModel()

        

        return res.status(200).json({ ...fullFillment })

    }

}

module.exports = MessageController