const Book = require("../models/Book")
const Publisher = require("./../models/Publisher")
const User = require("./../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { sendEmail } = require("../utils/email")

exports.addDataOfBook = async (req, res) => {
    try {
        // const dec = await Publisher.findByIdAndUpdate(req.body.ridedata, {
        //     $inc: { passenger: - req.body.seats }
        // })
        const result = await Book.create(req.body)
        const { driver, passenger, seats, price, time, phoneno, from, to } = result

        // const dataofdriver = await Publisher.findOne({ publisher: driver })
        const dataofdriver = await User.findById(driver)
        const dataofpassenger = await User.findById(passenger)

        const { name: namedriver, email: emaildriver, } = dataofdriver
        const { name: namepassenger, email: emailpassenger, } = dataofpassenger

        console.log(emaildriver, emailpassenger);

        if (result) {
            sendEmail({
                sendTo: emaildriver,
                msg: `${namepassenger} booked ride ! 
                from:${from},
                to:${to},
                time:${time},
                price:${price},
                phoneno:${phoneno},

                `,
                sub: `Confirmed ! ${namepassenger} booked ride! `
            }),
                sendEmail({
                    sendTo: emailpassenger,
                    msg: `you booked   to ride with  ${namedriver} ! 
                from:${from},
                to:${to},
                time:${time},
                price:${price},
                phoneno:${phoneno},

                `,
                    sub: `You are booked to travel with ${namedriver}! `
                })
        }




        res.json({
            success: true,
            message: ` book data added successfully`,
            // result
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "error" + `${error.message}`
        })
    }
}



exports.getAllBookData = async (req, res) => {
    try {
        const result = await Book.find()

        res.json({
            success: true,
            message: `All data of booked ride  fetched successfully`,
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

exports.deleteBookedData = async (req, res) => {
    try {
        const result = await Book.deleteMany()
        res.json({
            success: true,
            message: `All data of booked ride  deleted successfully`,
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "error" + `${error.message}`
        })
    }
}
