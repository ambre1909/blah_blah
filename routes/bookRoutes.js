const { getAllBookData, addDataOfBook, deleteBookedData } = require("../controllers/bookController")

const router = require("express").Router()

router
    .get("/", getAllBookData)
    .post("/addbookdata", addDataOfBook)
    .delete("/destroy", deleteBookedData)


module.exports = router