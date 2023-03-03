const publishdata = require("./../models/Publisher")
const { format } = require("date-fns")
const Book = require("../models/Book")

exports.getAllRides = async (req, res) => {

    try {
        // $inc
        // $dec
        const total = await publishdata.countDocuments()
        const { from, to, seats, date, sortThis, profile, instant, smoking, pets } = req.query
        // console.log(profile, instant, smoking, pets);
        // console.log(amenities.profile);
        let userdefineddate
        if (date) {
            userdefineddate = date
            // console.log("date found", date);
            // console.log("if")
        } else {
            userdefineddate = null
            // console.log("else")
        }

        // to sort 
        let sortdata
        if (sortThis === 'early') {
            sortdata = 'time'

        } if (sortThis === 'price') {
            console.log("price");
            sortdata = 'price'
        }
        if (sortThis === 'shortest') {
            sortdata = 'tripTime'
        }

        console.log(instant)
        const result = await publishdata.find({
            date: userdefineddate
                ? {
                    $eq: userdefineddate
                }

                : {
                    $gte: format(new Date(), "yyyy-MM-dd")
                },

            "time:": {
                $gt: format(new Date(), "HH:mm")
            },
            // $and: [{
            //     pets: true,
            //     instant: true
            // }],
            // passenger: { $gt: 0 }
            passenger: { $gte: seats },
            from: from,
            to: to
        }).sort({ [sortdata]: 1 }).populate("publisher", "name email-_id")

        // const result = await publishdata.find({
        //     pets,
        //     instant
        // }).sort({ [sortdata]: 1 }).populate("publisher", "name-_id")


        res.json({
            success: true,
            message: `All blogs fetched successfully`,
            result
        })
    } catch (error) {
        res.status(400).json({
            message: `error ${error.message}`
        })
    }
}

exports.getSingleRide = async (req, res) => {
    try {
        // const result = await publishdata.findById(req.params.id).populate("auther", "name -_id")
        // console.log(req.params);
        const total = await publishdata.countDocuments()
        const result = await publishdata.findById(req.params.id)
        res.json({
            success: true,
            message: " single ride fetch  Successfully",
            total,
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}

exports.getAllRidesOfUser = async (req, res) => {
    try {
        const { id } = req.params

        // const result = await Book.findById(id, {
        //     // driver: id,
        //     // passenger: id,

        // })
        console.log(id)
        const resultofpassengerride = await Book.find({
            $or: [{ driver: id }, { passenger: id }]
        }).populate("passenger", "name")
            .populate("driver", "name")

        const resultofdriverride = await publishdata.find({

            publisher: id,
            // $or: [{ driver: id }, { passenger: id }]
            // publisher: '63cc27b49df071206081f352',


        })

        res.json({
            success: true,
            message: " get All Rides Of User Fetched Successfully",
            result: {
                resultofpassengerride,
                resultofdriverride
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}

// const result = await publishdata.find({
//             date: userdefineddate
//                 ? {
//                     $eq: userdefineddate
//                 }

//                 : {
//                     $gte: format(new Date(), "yyyy-MM-dd")
//                 },

//             "time:": {
//                 $gt: format(new Date(), "HH:mm")
//             },
//             // passenger: { $gt: 0 }
//             passenger: { $gte: seats },
//             from: from,
//             to: to
//         })