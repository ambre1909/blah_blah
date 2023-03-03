const { SortDataOfRides } = require("../controllers/SortController")

const router = require("express").Router()

router
    .get("/publisher", SortDataOfRides)



module.exports = router