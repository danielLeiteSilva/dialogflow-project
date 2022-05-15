const express = require("express")
const wokeDyno = require("woke-dyno")

const app = express()
const Router = require("./routes/Router")


const port = process.env.PORT || 8080

const uri = "https://dialogflow-project.herokuapp.com/"

app.use(express.json())
app.use(Router)

app.listen(port, () => {

    console.log(`Server connected in port ${port}`);
    wokeDyno({
        url: uri,
        interval: 1200000
    }).start()

})