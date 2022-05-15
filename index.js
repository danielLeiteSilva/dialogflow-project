const express = require("express")

const app = express()
const Router = require("./routes/Router")

const port = process.env.PORT || 8080

app.use(express.json())
app.use(Router)

app.listen(port, () =>
    console.log(`Server connected in port ${port}`));