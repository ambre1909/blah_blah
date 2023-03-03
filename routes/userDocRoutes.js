const { getallDocs, addDocuments } = require("../controllers/DocController")
const upload = require("../middlewares/uploadMiddleware")
const router = require("express").Router()

router
    .get("/", getallDocs)
    .post("/adddata", addDocuments)



module.exports = router
