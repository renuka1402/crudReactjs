var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "lokeshkourav98@gmail.com",
    pass: "dybubtfnfajrkcbf"
  }
});

var mailOptions = {
  from: "lokeshkourav98@gmail.com",
  to: "renu66138@gmail.com",
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