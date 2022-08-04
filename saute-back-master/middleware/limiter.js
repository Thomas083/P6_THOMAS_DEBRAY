const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windwMs: 15*60*1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
})

// Middleware
module.exports = limiter