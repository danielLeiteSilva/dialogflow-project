const express = require("express").Router
const router = express()

const MessageController = require("../controller/MessageController")

router.get("/", (req, res) => res.status(200).json({message: "I'm ok"}))
router.post("/message", MessageController.message)

module.exports = router