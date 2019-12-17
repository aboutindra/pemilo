const nodemailer = require('nodemailer');

class SentCode{

     sentToEmail(col_code_email, col_adm, param){
        let body = "<center><h3>Silahkan klik tombol untuk verifikasi</h3><hr/><a href='http://localhost:3000/verification/"+ param.verification_code +"'>Klik untuk verifikasi!</a>" + " </center>";
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'indrawannonmuhamad@gmail.com',
                pass: 'DeepCode!'
            }
        });

        var mailOptions = {
            from: 'indrawannonmuhamad@gmail.com',
            to: param.email,
            subject: 'Verifikasi Akun Mu! ~ Pemilo',
            html : body,
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

}

module.exports = SentCode;