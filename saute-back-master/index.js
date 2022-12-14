const { app, express } = require("./server")
const { sautesRouter } = require("./routers/sautes.router")
const { authRouter } = require("./routers/auth.router")
const port = 3000
const path = require("path")


// Connection to database
require("./mongo")

// Middleware
app.use(express.json())
app.use("/api/sauces", sautesRouter)
app.use("/api/auth", authRouter)

//Routes
app.get("/", (req, res) => res.send("Hello World!"))

// Listen
app.use("/images", express.static(path.join(__dirname, "images")))
app.listen(port, () => console.log("Listening on port " + port))
