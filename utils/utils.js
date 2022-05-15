const fs = require("fs")

function readFile(pathFile){
    try{

        let buffer = fs.readFileSync(pathFile)
        let textFile = Buffer.from(buffer).toString()
        let list = JSON.parse(textFile)
        return list

    }catch(error){
        console.log(`Error on read file ${error}`)
        return
    }
}

function writeFile(path, data){
    try{

        let writeFile = fs.writeFileSync(path, data)

    }catch(error){
        console.log(`Error on write file ${error}`)
    }
}

module.exports = {
    readFile,
    writeFile
}