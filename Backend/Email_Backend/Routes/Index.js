const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = express.Router();


const sent_code = require('./sentCode');
const SentCode = new sent_code();

const verify_code = require('./verifyCode');
const VerifyCode = new verify_code();

const auth = require('./../Controllers/Encryption/lib/Auth');
const Auth = new auth();

const encrypt = require('./../Controllers/Encryption/hash/Encrypt');
const Encrypt = new encrypt();

const decrypt = require('./../Controllers/Encryption/hash/Decrypt');
const Decrypt = new decrypt();

app.post('/request_code', async (req, res, next) => {

    await Auth.verifToken(req, res, next);

}, async (req, res) => {

    let email = req.body.email;
    let status = false;
    let accParam = {email: email, status_verification: status};
    let process = await SentCode.processCodeSignUp(accParam);
    res.send( { result : Encrypt.chashO( {result: process} ) } )

});

app.post('/request_code/status', async (req, res, next) => {

    await Auth.verifToken(req, res, next);

}, async (req, res) => {

    let email = req.body.email;
    let verifCode = req.body.verification_code;
    let accountParam = {email: email, verification_code: verifCode};

    console.log(accountParam);

    let process = await VerifyCode.processCode(accountParam);
    res.send( { result : Encrypt.chashO( {result: process} ) } )

});

module.exports = app;   