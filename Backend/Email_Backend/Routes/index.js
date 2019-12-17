const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = express.Router();


const sent_code = require('./sent_code');
const SentCode = new sent_code();

const verify_code = require('./verify_code');
const VerifyCode = new verify_code();


app.post('/sent_code', async function (req,res) {
    let email = req.body.email;
    let unique_code = req.body.unique_code;

    let process = await SentCode.processCodeSignUp(email, unique_code);
    return res.send({result : process })
});

app.get('/verification/:code', async function (req,res) {
 let verifCode = req.params.code;
  let process = await VerifyCode.processCode(verifCode);
  res.send({result : process});
});

module.exports = app;