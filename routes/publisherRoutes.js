const { addDataOfPublisher, getAllPublishData, deleteAllPublishData } = require("../controllers/publisherController")

const router = require("express").Router()

router
    .get("/", getAllPublishData)
    .post("/adddata", addDataOfPublisher)
    .delete("/destroy", deleteAllPublishData)


module.exports = router