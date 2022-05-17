//Utils
const utils = require('../utils/utils')
//Models
const FullFillmentModel = require("./FullFillmentModel")
const TextModel = require("./TextModel")
const RegisterModel = require("./RegisterModel")
const ResponseModel = require("./ResponseModel")
const FollowupEventInputModel = require("../model/FollowupEventInputModel")
//static instances
const RegisterFileModel = require("./RegisterFileModel")
const Data = require("../data/Data.js")

class MessageModel {

    message(parameters) {

        const fullFillment = new FullFillmentModel()
        const followupEventInput = new FollowupEventInputModel()
        const text = new TextModel()

        let [especialist, idEspecialista] = parameters.especialista.split(",")
        let [local, idLocal] = parameters.local.split(",")
        let dateAgendament = new Date(parameters.data)
        let [hour, idHour] = parameters.horario.split(",")
        let dateAgendamentComplete = utils.getDateAgendament(dateAgendament)
        let tutor = parameters.tutor.name
        let animal = parameters.animal
        let telefone = parameters.telefone
        let protocol = Math.floor(Math.random() * 655368462);

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
            animal, 
            telefone, 
            tutor, 
            protocol,
            Data.getEspecialistData(),
            Data.getDateData(),
            Data.getHoursData(),
            Data.getFiliaisData())

        if (Data.getConsultingData().length == 0) {

            RegisterFileModel.registerInFile(register, Data.getConsultingData())
            text.setTextObject(response.toString())
            fullFillment.setObjectText(text)

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
                RegisterFileModel.registerInFile(register, Data.getConsultingData())
                text.setTextObject(response.toString())
                fullFillment.setObjectText(text)
            }
        }
        return { ...fullFillment, ...followupEventInput}
    }
}

module.exports = MessageModel