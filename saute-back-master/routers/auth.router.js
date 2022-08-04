const { createUser, logUser } = require("../controllers/users")

const express = require("express")

const authRouter = express.Router()
const rateLimit = require("../middleware/limiter")
const password = require("../middleware/passwordValidate")
authRouter.post("/signup",rateLimit,password, createUser)
authRouter.post("/login",rateLimit, logUser)

module.exports = {authRouter}