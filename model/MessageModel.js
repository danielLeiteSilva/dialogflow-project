const path = require("path")
const FullFillmentModel = require("./FullFillmentModel")
const TextModel = require("./TextModel")
const utils = require('../utils/utils')
const RegisterModel = require("./RegisterModel")
const Register = require("./Register")

class MessageController {

    message(req, res) {

        const fullFillment = new FullFillmentModel()
        const text = new TextModel()

        const parameters = req.body.queryResult.parameters

        let [especialist, idEspecialista] = parameters.especialista.split(",")
        let [local, idLocal] = parameters.local.split(",")
        let dateAgendament = new Date(parameters.data)
        let [hour, idHour] = parameters.horario.split(",")
        let dateAgendamentComplete = utils.getDateAgendament(dateAgendament)

        // Read files
        let date = utils.readFile(path.join(__dirname, '..', 'database', 'date.json'))
        let consultingFile = utils.readFile(path.join(__dirname, '..', 'database', 'consulting.json'))

        let register = new RegisterModel(
            idEspecialista,
            idLocal,
            dateAgendamentComplete,
            date,
            idHour
        )
        
        if (consultingFile.length == 0) {
            Register.registerInFile(register, consultingFile)
        } else {
            let idDate = date.find(element =>
                element.date == dateAgendamentComplete).id

            let isOcupped = consultingFile.find(element =>
                element.idDate === parseInt(idDate)
                && element.idLocal === parseInt(idLocal)
                && element.idHour === parseInt(idHour)
                && element.idEspecialista === parseInt(idEspecialista))
                
            if (isOcupped) {
                text.setTextObject("Desculpe, não foi possível agendar essa consulta!")
                fullFillment.setObjectText(text)
            } else {
                Register.registerInFile(register, consultingFile)
            }
        }
        return res.status(200).json({ ...fullFillment })
    }
}

module.exports = MessageController