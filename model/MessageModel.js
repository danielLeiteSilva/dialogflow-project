const path = require("path")
const FullFillmentModel = require("./FullFillmentModel")
const TextModel = require("./TextModel")
const utils = require('../utils/utils')
const RegisterModel = require("./RegisterModel")
const Register = require("./Register")
const ResponseModel = require("./ResponseModel")

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
        let especialistData = utils.readFile(path.join(__dirname, '..', 'database', 'especialist.json'))
        let filiaisData = utils.readFile(path.join(__dirname, '..', 'database', 'filiais.json'))
        let hoursData = utils.readFile(path.join(__dirname, '..', 'database', 'hours.json'))

        let idDate = date.find(element => element.date == dateAgendamentComplete).id

        let register = new RegisterModel(
            idEspecialista,
            idLocal,
            dateAgendamentComplete,
            date,
            idHour
        )
        let response = new ResponseModel(
            idEspecialista,
            idDate,
            idHour,
            idLocal,
            especialistData,
            date,
            hoursData,
            filiaisData)

        if (consultingFile.length == 0) {
            Register.registerInFile(register, consultingFile)
            text.setTextObject(response.toString())
            fullFillment.setObjectText(text)
        } else {
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
                text.setTextObject(response.toString())
                fullFillment.setObjectText(text)
            }
        }
        return res.status(200).json({ ...fullFillment })
    }
}

module.exports = MessageController