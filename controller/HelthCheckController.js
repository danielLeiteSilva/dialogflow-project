class HelthCheckController {

    execute(req, res) {
        try {
            res.status(200).json({ message: "I'm ok" })
        } catch (error) {
            res.status(400).json({ error: error, statusCode: 400 })
        }
    }
}

module.exports = new HelthCheckController