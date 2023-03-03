const nodemailer = require("nodemailer")

exports.sendEmail = ({ sendTo, msg, sub, }) => {
    console.log("xxxxxxxx ", sendTo);
    const transporter = nodemailer
        .createTransport({
            service: "gmail",
            auth: {
                user: "ambreakanksha586@gmail.com",
                pass: "lvbqcjcmzsflpsme"
            }
        })  //end
    transporter.sendMail({
        to: sendTo,
        from: "ambreakanksha586@gmail.com",
        subject: sub,
        text: msg
    }, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("email send successfully")
        }
    })
}









    // type: "OAuth2",
// host: "smtp.gmail.com",
            // port: 465,
// clientId: "472763106560-dtrlj3v1jvlnupgi4l6pku59rrsv2nf4.apps.googleusercontent.com",
                // clientSecret: "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",
                // accessToken: "",
                // refreshToken: ""

//   hjxygwathtplvwew