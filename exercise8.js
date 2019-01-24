var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vinoliyakavignan1997.com',
    pass: '*******'
  }
});

var mailOptions = {
  from: 'vinoliyakavignana1997@gmail.com',
  to: 'info@uki.life',
  subject: 'Testing my nodemailer module',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
