class DataModel {
    constructor(especialistData, dateData, hoursData, filiaisData) {
        this.especialistData = especialistData
        this.dateData = dateData
        this.hoursData = hoursData
        this.filiaisData = filiaisData
    }

    getEspecialistData(idEspecialista){
        return this.especialistData.find(element => element.id === parseInt(idEspecialista))
    }
    getDateData(idDate){
        return this.dateData.find(element => element.id === parseInt(idDate))
    }
    getHourData(idHour){
        return this.hoursData.find(element => element.id === parseInt(idHour))
    }
    getLocalData(idLocal){
        return this.filiaisData.find(element => element.id === parseInt(idLocal))
    }
}

module.exports = DataModel