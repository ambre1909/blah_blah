const user = require("./../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.registerUser = async (req, res) => {
    try {
        const f = await user.findOne({ email: req.body.email })
        if (f) {
            return res.status(400).json({
                success: false,
                message: "email already exist, please register with another mail !"
            })
        }
        req.body.password = bcrypt.hashSync(req.body.password)
        const result = await user.create({ ...req.body, verified: false })
        // const result = await user.create(req.body)
        const token = jwt.sign({ id: result._id }, process.env.JWT_KEY)
        res.json({
            success: true,
            message: `${result.name} registered successfully`,
            result: {
                name: result.name,
                email: result.email,
                id: result._id,
                token
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "error" + `${error.message}`
        })
    }
}


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await user.findOne({ email })
        if (!result) {
            return res.status(401).json({ success: false, message: "Email not found" })
        }
        const verify = bcrypt.compareSync(password, result.password)
        if (!verify) {
            return res.status(401).json({ success: false, message: "password are not matched" })
        }
        const token = jwt.sign({ id: result._id }, process.env.JWT_KEY, { expiresIn: 60 * 5 })
        res.json({
            success: true,
            message: "login success",
            result: {
                name: result.name,
                email: result.email,
                id: result._id,
                token
            },
        })
    } catch (error) {
        res.status(400).json({
            message: `error ${error.message}`
        })
    }
}

exports.getAllRegisteredUser = async (req, res) => {
    try {
        const result = await user.find()
        res.json({
            success: true,
            count: result.length,
            message: `All users fetched successfully`,
            result
        })
    } catch (error) {
        res.status(400).json({
            message: `error ${error.message}`
        })
    }
}

exports.deleteAllUsers = async (req, res) => {
    try {
        const result = await user.deleteMany()
        res.json({
            success: true,
            message: `All users deleted successfully`,
        })
    } catch (error) {
        res.status(400).json({
            message: `error ${error.message}`
        })
    }
}

exports.editUserData = async (req, res) => {
    try {
        const { userId } = req.params
        req.body.password = bcrypt.hashSync(req.body.password)
        await user.findByIdAndUpdate(userId, req.body)
        res.json({
            success: true,
            message: "user data updated successfully",
            result: {
                name: result.name,
                email: result.email,
                id: result._id,

            }
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,

        })
    }
}

exports.editUserPassword = async (req, res) => {
    try {
        const { loginId } = req.params
        console.log(req.body);
        console.log(loginId, "hiii");
        req.body.password = bcrypt.hashSync(req.body.password)
        await user.findByIdAndUpdate(loginId, {
            password: req.body.password
        })
        res.json({
            success: true,
            message: "password updated successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,

        })
    }
}
