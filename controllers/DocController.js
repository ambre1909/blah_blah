const Publisher = require("./../models/Publisher")
const userdocs = require("../models/userDocument")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { multiDocUpload } = require("../utils/upload")

exports.addDocuments = async (req, res) => {
    try {
        multiDocUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer error" + err
                })
            }

            if (req.files.photo) {
                req.body.photo = `photo/${req.files.photo[0].filename}`
            }
            if (req.files.adharPhoto) {
                req.body.adharPhoto = `adharPhoto/${req.files.adharPhoto[0].filename}`
            }
            if (req.files.drivingLicense) {
                req.body.drivingLicense = `drivingLicense/${req.files.drivingLicense[0].filename}`
            }
            const result = await userdocs.create(req.body)


            res.json({
                success: true,
                documentuploaded: true,
                message: "docs uploaded successfully"
            })
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}

exports.getallDocs = async (req, res) => {
    try {
        const result = await userdocs.find()
        res.json({
            success: true,
            message: `All personal documents  fetched successfully`,
            result: {
                result
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "error" + `${error.message}`
        })
    }
}
