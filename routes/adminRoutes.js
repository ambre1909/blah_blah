const { getAllRides, getSingleRide, getAllRidesOfUser } = require("../controllers/adminController")

const router = require("express").Router()

router
    // .get("/", getAllFinderData)
    .get("/getrides", getAllRides)
    .get("/getrides/:id", getSingleRide)
    .get("/getallridedata/:id", getAllRidesOfUser)

module.exports = router