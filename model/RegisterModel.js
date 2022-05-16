const unique = require("uniqid")

class RegisterModel {
    constructor(idEspecialista, idLocal, dateAgendamentComplete, date, hourId) {
        this.id = unique()
        this.idEspecialista = parseInt(idEspecialista)
        this.idLocal = parseInt(idLocal)
        this.idDate = date.find(element => element.date == dateAgendamentComplete).id,
        this.idHour = parseInt(hourId)
    }
}

module.exports = RegisterModel