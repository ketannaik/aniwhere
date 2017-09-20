var nodemailer = require('nodemailer');

exports.sendEnquiry = function(req, res) {
    
    var transporter = nodemailer.createTransport({
        host: 'mail.aniwheretours.com',
        auth: {
            user: 'aj@aniwheretours.com',
            pass: 'of1Ky6&8'
        }
    });

    var mailOptions = {
        from: 'ketan.naik11@gmail.com',
        to: 'ketan.naik11@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return res.json({
                message: 'Error in sending email',
                status: 'failure'
            });
        } else {
            console.log('Email sent: ' + info.response);
            return res.json({
                message: info.response,
                status: 'success'
            });
        }
    });
}