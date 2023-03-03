const publishdata = require("./../models/Publisher")
const { format } = require("date-fns")

exports.SortDataOfRides = async (req, res) => {

    try {
        const { from, to, seats, date, sortThis } = req.query
        console.log(sortThis);
        let userdefineddate
        if (date) {
            userdefineddate = date
            // console.log("date found", date);
            console.log("if")
        } else {
            userdefineddate = null
            console.log("else")
        }


        let sortdata
        if (sortThis === 'early') {
            sortdata = 'early'
        } if (sortThis === 'price') {
            sortdata = 'price'
        }
        if (sortThis === 'shortest') {
            sortdata = 'shortest'
        }
        // else if (sortThis === 'shortest') {
        //     sortdata = 'shortest'
        // }
        // const result = await publishdata.find({
        //     date: userdefineddate
        //         ? {
        //             $eq: userdefineddate
        //         }

        //         : {
        //             $gte: format(new Date(), "yyyy-MM-dd")
        //         },

        //     "time:": {
        //         $gt: format(new Date(), "HH:mm")
        //     },
        //     // passenger: { $gt: 0 }
        //     passenger: { $gte: seats },
        //     from: from,
        //     to: to
        // }).sort({ [sortdata]: 1 })
        const result = await publishdata.find().sort({ price: 1 })
        console.log(result);
        res.json({
            success: true,
            message: `All blogs fetched successfully`,

        })
    } catch (error) {
        res.status(400).json({
            message: `error ${error.message}`
        })
    }
}