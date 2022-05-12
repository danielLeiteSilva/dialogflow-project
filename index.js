const express = require("express")
const app = express()
const port = process.env.PORT || 8080
const Router = require("./routes/Router")

app.use(express.json())

app.use(Router)

app.listen(port, () =>
    console.log(`Connected on port ${port}`))