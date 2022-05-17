const utils = require("../utils/utils.js")
const path = require("path")

class GetDataController {

    execute(req, res) {
        try {
            let consulting = utils.readFile(path.join(__dirname, '..', 'database', 'consulting.json'))
            res.status(200).json({ consulting: consulting })
        } catch (error) {
            res.status(400).json({ error: error, statusCode: 400 })
        }
    }
}

module.exports = new GetDataController