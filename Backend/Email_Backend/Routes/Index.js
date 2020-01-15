const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = express.Router();


const sent_code = require('./sentCode');
const SentCode = new sent_code();

const verify_code = require('./verifyCode');
const VerifyCode = new verify_code();

app.post('/request_code', async function (req, res) {
    let email = req.body.email; 
    let status = false;
    let accParam = {email: email, status_verification: status};
    let process = await SentCode.processCodeSignUp(accParam);
    return res.send({result: process})
});

app.post('/request_code/status', async function (req, res) {

    let email = req.body.email;
    let verifCode = req.body.verification_code;
    let accountParam = {email: email, verification_code: verifCode};
    
    console.log(accountParam);
    
    let process = await VerifyCode.processCode(accountParam);
    res.send({result: process})

});

module.exports = app;   