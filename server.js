const express = require("express")
const cors = require("cors")
const db = require("././config/db")
const mongoose = require("mongoose")

const app = express()
require("dotenv").config({ path: "./.env" })
db()
app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.use("/users", require("./routes/userRoutes"))
app.use("/book", require("./routes/bookRoutes"))
app.use("/publisher", require("./routes/publisherRoutes"))
app.use("/userdoc", require("./routes/userDocRoutes"))
app.use("/admin", require("./routes/adminRoutes"))
app.use("/sort", require("./routes/sortRoutes"))

const PORT = process.env.PORT || 5000


mongoose.connection.once("open", () => {
    app.listen(PORT,
        console.log(`SERVER RUNNING http://localhost:${PORT}`))
    console.log("mongo connected");
})
