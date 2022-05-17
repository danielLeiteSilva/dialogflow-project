const DataModel = require("./DataModel")

class ResponseModel extends DataModel{
    constructor(idEspecialista, idDate, idHour, idLocal, especialistData, dateData, hoursData, filiaisData){
        super(especialistData, dateData, hoursData, filiaisData)
        this.idEspecialista = idEspecialista
        this.idDate = idDate 
        this.idHour = idHour
        this.idLocal = idLocal
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
        return `Sua consulta foi marcada com ${this.getEspecialistResponse()} na data de ${this.getDateResponse()} no período das ${this.getHourResponse()} na filial ${this.getLocalResponse()}.`
    }
}

module.exports = ResponseModel