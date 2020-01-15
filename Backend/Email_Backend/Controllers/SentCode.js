const nodemailer = require('nodemailer');
const ejs = require('ejs');

const generateCode = require('./GenerateCode');
const GenerateCode = new generateCode();

class SentCode {
    
    async sentToEmail(col_code_email, col_adm, param) {

        let checkDuplicateEmail = await col_adm.find({email: param.email}).toArray();
        let code = await GenerateCode.generateVerificationCode();

        console.log(checkDuplicateEmail, code);
        
        if (checkDuplicateEmail.length === 0) {
            let accParam = {
                email: param.email,
                verification_code: code,
                status_verification: param.status_verification
            };

            let statusInsertColCodeEmail = await col_code_email.insertOne(accParam);
            let data = await ejs.renderFile(__dirname + "/Assets/template.ejs", {adminsName: param.email, code: code});
            
            console.log({email: param.email, code: await GenerateCode.generateVerificationCode()});
            
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
                subject: 'Verifikasi Akun Mu!⠀' + '(' + await GenerateCode.generateVerificationCode() + ')' + ' ~ Pemilo',
                html: data,
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    return false;
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            
            return true;
        
        } else {
        
            return false;
        
        }
    }
}

module.exports = SentCode;