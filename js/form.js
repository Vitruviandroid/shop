var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'formposta009@gmail.com',
    pass: '12345678qwertyui'
  }
});

var mailOptions = {
  from: 'formposta009@gmail.com',
  to: 'deadpool321214@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// document.querySelector("form").addEventListener("click", function (event) {
//     event.preventDefault()
// });