const Publisher = require("./../models/Publisher")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { format, getMonth, getYear, getDate, getHours, differenceInMinutes } = require("date-fns")

exports.addDataOfPublisher = async (req, res) => {
    try {

        let time = req.body.time
        let endtime = req.body.endtime
        let x = time.split(":")
        let y = endtime.split(":")
        let month = format(new Date(req.body.date), "MM")
        let date = format(new Date(req.body.date), "dd")
        let year = format(new Date(req.body.date), "yyyy")
        // console.log(x[0], x[1], y[0], y[1]);


        const xx = differenceInMinutes(
            new Date(year, month, date, y[0], y[1], 0),
            new Date(year, month, date, x[0], x[1], 0),
        )
        console.log(xx);

        const result = await Publisher.create({
            ...req.body,
            tripTime: xx
        })
        res.json({
            success: true,
            message: `publisher data added successfully`,
            // result: {
            //     result,

            // }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "error" + `${error.message}`
        })
    }
}

exports.getAllPublishData = async (req, res) => {
    try {
        // const { date } = await Publisher.find().select("time endtime date")
        // console.log(date);
        // console.log(format(today, "yyy/MM/dd"))

        const result = await Publisher.find()
        res.json({
            success: true,
            message: `All data of publish rides fetched successfully`,
            result
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "error" + `${error.message}`
        })
    }
}

exports.deleteAllPublishData = async (req, res) => {
    try {
        const result = await Publisher.deleteMany()
        res.json({
            success: true,
            message: `All data deleted successfully`,
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "error" + `${error.message}`
        })
    }
}



        // const month = getMonth(y)
        // const year = getYear(y)
        // const date = getDate(y)
        // console.log(month, year, date);
        // 01: 00 , 02: 00 ,2023 - 01 - 31
        // new Date(2014, 6, 2, 6, 50)


        // console.log("hiii", time, endtime, date);
        // let date = req.body.date
        // let y = format(req.body.date, "dd / MM / yy")
           // console.log(format(time, "m:s:aaa")); //26/01/2023/4:23:29:pm
        // let hour = time.getHours()
        // console.log(hour);


        // var minute = now.getMinutes()
          // let y = format(req.body.date, "dd/MM/yyyy")
        // console.log(format(req.body.date, "MM"));
        // console.log(format(req.body.date, "dd"));
        // console.log(format(req.body.date, "yyyy"));
        // console.log(format(new Date(req.body.date), "MM"));