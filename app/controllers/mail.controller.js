var nodemailer = require('nodemailer');

exports.sendEnquiry = function(req, res) {
    
	var fromEmailId = req.body.email;
	var toEmailId = 'aj@aniwheretours.com';
	var name = req.body.name;
	var details =req.body.otherdetails;
	var mobileNumber = req.body.mobile;
	
    var transporter = nodemailer.createTransport({
        host: 'mail.aniwheretours.com',
		port: 25,
        secure: false,
        auth: {
            user: 'aj@aniwheretours.com',
            pass: 'mahantji@1'
        }
    });

    var mailOptions = {
        from: fromEmailId,
        to: toEmailId,
        subject: 'Enquiry for Dubai',
        text: details+' '+ mobileNumber
    };

	console.log(JSON.stringify(mailOptions));
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