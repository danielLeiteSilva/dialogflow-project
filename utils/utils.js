const fs = require("fs")

function readFile(pathFile) {
    try {

        let buffer = fs.readFileSync(pathFile)
        let textFile = Buffer.from(buffer).toString()
        let list = JSON.parse(textFile)
        return list

    } catch (error) {
        console.log(`Error on read file ${error}`)
        return
    }
}

function writeFile(path, data) {
    try {
        fs.writeFileSync(path, data)
    } catch (error) {
        console.log(`Error on write file ${error}`)
    }
}


function getDateAgendament(dateAgendament) {

    let dayAgendament = dateAgendament.getDate() < 10 ? "0" + dateAgendament.getDate() : dateAgendament.getDate()
    let monthAgendament = (dateAgendament.getMonth() + 1) < 10 ? "0" + (dateAgendament.getMonth() + 1) : dateAgendament.getMonth() + 1
    let yearAgendament = dateAgendament.getFullYear()
    let dateAgendamentComplete = `${dayAgendament}/${monthAgendament}/${yearAgendament}`

    return dateAgendamentComplete
}

module.exports = {
    readFile,
    writeFile,
    getDateAgendament
}