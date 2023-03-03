const mongoose = require('mongoose')

module.exports = mongoose.model("Publisher", mongoose.Schema({
    from: {
        type: String,
        required: [true, "please provide start point"]
    },
    to: {
        type: String,
        required: [true, "please provide destination"]
    },
    passenger: {
        type: Number,
        required: [true, "please provide number of  passengers"]
    },
    pickup: {
        type: String,
        required: [true, "please provide pickup location"]
    },
    dropoff: {
        type: String,
        required: [true, "please provide dropoff location"]
    },
    route: {
        type: String,
        required: [true, "please provide route "]
    },
    addpasseanger: {
        type: String,
        required: [true, "please provide addpasseanger "]
    },
    date: {
        type: String,
        required: [true, "please provide  date "]
    },
    time: {
        type: String,
        required: [true, "please provide time of travelling "]
    },
    pickuptime: {
        type: String,
        required: [true, "please provide pickuptime "]
    },
    price: {
        type: Number,
        required: [true, "please provide price "]
    },
    tripTime: {
        type: Number
    },
    phoneno: {
        type: String,
        required: [true, "please provide phoneno "]
    },
    about: {
        type: String,
        required: [true, "please provide about "]
    },
    instant: {
        type: Boolean,
        required: [true, "please tell us  about instantly booking"]
    },
    endtime: {
        type: String,
        required: [true, "please tell us endtime"]
    },
    smoking: {
        type: Boolean,
        required: [true, "please tell us smoking allowed or not"]
    },
    pets: {
        type: Boolean,
        required: [true, "please tell us pets allowed or not"]
    },
    verified: {
        type: Boolean,
        default: false
    },
    publisher: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },

}, { timestamps: true })) 