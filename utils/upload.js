const multer = require("multer")
const { v4: uuid } = require("uuid")
const path = require("path")
const fs = require("fs")

const multiDocStorage = multer.diskStorage({
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg", ".pdf"]
        if (!allowedExt.includes(ext)) {
            cb("Invalid Extension")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        // const loc = "public/docs"
        let loc
        if (file.fieldname === "photo") {
            loc = "public/photo"
        } if (file.fieldname === "adharPhoto") {
            loc = "public/adharPhoto"
        }
        if (file.fieldname === "drivingLicense") {
            loc = "public/drivingLicense"
        }
        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    }
})





exports.multiDocUpload = multer({ storage: multiDocStorage, limits: { fileSize: "1mb" } })
    .fields([
        { name: "photo", maxCount: 1 },
        { name: "adharPhoto", maxCount: 1 },
        { name: "drivingLicense", maxCount: 1 },
    ])