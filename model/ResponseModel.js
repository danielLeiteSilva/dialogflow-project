const DataModel = require("./DataModel")

class ResponseModel extends DataModel{
    constructor(idEspecialista, idDate, idHour, idLocal, animal, telefone, tutor, protocol, especialistData, dateData, hoursData, filiaisData){
        super(especialistData, dateData, hoursData, filiaisData)
        this.idEspecialista = idEspecialista
        this.idDate = idDate 
        this.idHour = idHour
        this.idLocal = idLocal
        this.telefone = telefone
        this.animal = animal
        this.tutor = tutor
        this.protocol = protocol
    }
    getEspecialistResponse(){
        return this.getEspecialistData(this.idEspecialista).name
    }
    getDateResponse(){
        return this.getDateData(this.idDate).date
    }
    getHourResponse(){
        return this.getHourData(this.idHour).hour
    }
    getLocalResponse(){
        return this.getLocalData(this.idLocal).unidade
    }
    toString(){
        return `Protocolo de atendimento: ${this.protocol} ${this.tutor} a consulta para o seu animalzinho ${this.animal} foi marcada com ${this.getEspecialistResponse()} na data de ${this.getDateResponse()} no período das ${this.getHourResponse()} na filial ${this.getLocalResponse()}. Seu telefone ${this.telefone} foi registrado e retornaremos caso necessário.`
    }
}

module.exports = ResponseModel