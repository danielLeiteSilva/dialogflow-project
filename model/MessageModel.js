//Utils
const utils = require('../utils/utils')
//Models
const FullFillmentModel = require("./FullFillmentModel")
const TextModel = require("./TextModel")
const RegisterModel = require("./RegisterModel")
const ResponseModel = require("./ResponseModel")
const FollowupEventInput = require("../model/FollowupEventInputModel")
//static instances
const Register = require("./Register")
const Data = require("../data/Data.js")

class MessageController {

    message(req, res) {

        const fullFillment = new FullFillmentModel()
        const followupEventInput = new FollowupEventInput()
        const text = new TextModel()
        
        const parameters = req.body.queryResult.parameters

        let [especialist, idEspecialista] = parameters.especialista.split(",")
        let [local, idLocal] = parameters.local.split(",")
        let dateAgendament = new Date(parameters.data)
        let [hour, idHour] = parameters.horario.split(",")
        let dateAgendamentComplete = utils.getDateAgendament(dateAgendament)

        let idDate = Data.getDateData().find(element => element.date == dateAgendamentComplete).id      
        
        let register = new RegisterModel(
            idEspecialista,
            idLocal,
            dateAgendamentComplete,
            Data.getDateData(),
            idHour
        )
        let response = new ResponseModel(
            idEspecialista,
            idDate,
            idHour,
            idLocal,
            Data.getEspecialistData(),
            Data.getDateData(),
            Data.getHoursData(),
            Data.getFiliaisData())

        if (Data.getConsultingData().length == 0) {
            
            Register.registerInFile(register, Data.getConsultingData())
            text.setTextObject(response.toString())
            fullFillment.setObjectText(text)
            followupEventInput.setNameObject("dados")

        } else {

            let isOcupped = Data.getConsultingData().find(element =>
                element.idDate === parseInt(idDate)
                && element.idLocal === parseInt(idLocal)
                && element.idHour === parseInt(idHour)
                && element.idEspecialista === parseInt(idEspecialista))

            if (isOcupped) {
                text.setTextObject("Desculpe, não foi possível agendar essa consulta!")
                fullFillment.setObjectText(text)
                followupEventInput.setNameObject("marcar")

            } else {
                Register.registerInFile(register, Data.getConsultingData())
                text.setTextObject(response.toString())
                fullFillment.setObjectText(text)
                followupEventInput.setNameObject("dados")
            }
        }
        return res.status(200).json({ ...fullFillment, ...followupEventInput })
    }
}

module.exports = MessageController