const mongoose = require("mongoose")

module.exports = mongoose.model("book", mongoose.Schema({
    driver: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    passenger: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        // required: true
    },
    ridedata: {
        type: mongoose.Types.ObjectId,
    },
    seats: {
        type: Number,
        required: [true, "please provide seats"]
    },
    price: {
        type: String,
        // required: [true, "please provide price"]
    },
    time: {
        type: String,
        // required: [true, "please provide price"]
    },
    phoneno: {
        type: String,
        // required: [true, "please provide price"]
    },
    from: {
        type: String,
        // required: [true, "please provide price"]
    },
    to: {
        type: String,
        // required: [true, "please provide price"]
    },



}, { timestamps: true })) 