
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "deadpool321214@gmail.com",
    port:587,
    secure:false,
    requireTLS:true,
    auth: {
        user: 'formposta009@gmail.com',
        pass: '12345678qwertyui'
    },
})

let option = await transporter.sendMail({
    from: 'formposta009@gmail.com',
    to: 'deadpool321214@gmail.com',
    subject: 'Message from Node js',
    text: 'This message was sent from Node js server.',
    html: '<b>fdfdfdfds;fdsfdfd</b>',
})

transporter.sendMail(option, function (err, info) {
    if (err) {
        console.log(err);
        return
    }
    console.log("Sent" + info.response);
})

// document.querySelector("form").addEventListener("click", function (event) {
//     event.preventDefault()
// });