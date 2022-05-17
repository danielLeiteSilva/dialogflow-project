const express = require("express").Router
const router = express()

const GetDataController = require("../controller/GetDataController")
const HelthCheckController = require("../controller/HelthCheckController")
const MessageController = require("../controller/MessageController")

router.get("/", HelthCheckController.execute)
router.get("/getdatabase", GetDataController.execute)
router.post("/message", MessageController.execute)

module.exports = router