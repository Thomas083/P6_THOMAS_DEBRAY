require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const helmet = require("helmet")

//middleware
app.use(cors())
app.use(express.json())
app.use(helmet())

module.exports = { app, express }
