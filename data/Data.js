const utils = require("../utils/utils.js")
const path = require("path")

class Data{

    getDateData(){
        return utils.readFile(path.join(__dirname, '..', 'database', 'date.json'))
    }

    getConsultingData(){
        return utils.readFile(path.join(__dirname, '..', 'database', 'consulting.json'))
    }

    getEspecialistData(){
        return utils.readFile(path.join(__dirname, '..', 'database', 'especialist.json'))
    }

    getFiliaisData(){
        return utils.readFile(path.join(__dirname, '..', 'database', 'filiais.json'))
    }

    getHoursData(){
        return utils.readFile(path.join(__dirname, '..', 'database', 'hours.json'))
    }
}

module.exports = new Data