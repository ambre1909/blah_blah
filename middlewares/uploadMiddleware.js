const multer = require("multer")
const path = require("path")
const fs = require("fs")
const { v4: uuid } = require("uuid")

const storage = multer.diskStorage({
    filename: (req, file, cb) => {

        const fn = uuid() + path.extname(file.originalname)
        console.log(file);
        if (file.mimetype !== "image/jpeg"
            && file.mimetype !== "image/png") {
            cb("this file extension is not supported")
        } else {
            req.body.photo = `uploads/${fn}`
            req.body.adharPhoto = `uploads/${fn}`
            req.body.drivingLicense = `uploads/${fn}`
            cb(null, fn)

        }

    },
    destination: (req, file, cb) => {
        const loc = "public/uploads"
        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    }
})

module.exports = multer({ storage })
// module.exports = multer({ storage:storage }) this is valid