const { getAllRegisteredUser, registerUser, login, editUserData, deleteAllUsers, editUserPassword } = require("../controllers/userController")

const router = require("express").Router()

router
    .get("/", getAllRegisteredUser)
    .post("/register", registerUser)
    .post("/login", login)
    .put("/:userId", editUserData)
    .put("/updatepass/:loginId", editUserPassword)
    .delete("/destroy", deleteAllUsers)

module.exports = router