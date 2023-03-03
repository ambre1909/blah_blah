const mongoose = require("mongoose")

module.exports = mongoose.model("users", mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide name"]
    },
    email: {
        type: String,
        required: [true, "please provide email"]
    },
    password: {
        type: String,
        required: [true, "please provide password"]
    },
    profile: {
        type: String,

    },
    verified: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })) 