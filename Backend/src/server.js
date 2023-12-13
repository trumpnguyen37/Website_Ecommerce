import express from "express"
import bodyParser from "body-parser"
import initWebRoutes from "./routes/web"
var cookieParser = require('cookie-parser')
const path = require('path')
require('dotenv').config()

const app = express()

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("./src/public"))
app.set("view engine", "ejs")
app.set("views", "./src/views")

initWebRoutes(app)

let port = process.env.PORT || 6969
app.listen(port, () => {
    console.log("Server listening on port: " + port)
})