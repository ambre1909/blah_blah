const mongoose = require("mongoose")

module.exports = mongoose.model("userdocs", mongoose.Schema({
    adharNumber: {
        type: String,
        required: [true, "please provide adhar Number"]
    },
    photo: {
        type: String,
        required: true
    },
    adharPhoto: {
        type: String,
        required: true
    },
    drivingLicense: {
        type: String,
        // required: true
    },
    // user: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "users",
    // },
}, { timestamps: true })) 