const passwordValidator = require("password-validator")

const passwordSchema = new passwordValidator()

passwordSchema
.is().min(9)
.is().max(100)
.has().uppercase()
.has().lowercase()
.has().digits(1)
.has().not().spaces()

module.exports = passwordSchema