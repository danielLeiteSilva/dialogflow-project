const path = require("path")
const utils = require('../utils/utils')

class Register {

    registerInFile(register, consultingFile) {

        consultingFile.push({...register})
        let newData = JSON.stringify(consultingFile)

        utils.writeFile(path.join(__dirname, '..', 'database', 'consulting.json'), newData)
    }
}

module.exports = new Register