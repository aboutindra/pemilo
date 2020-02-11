const express = require('express');
const app = express.Router();

const bp = require("body-parser");

const Client = require('./Client');
const client = new Client();

const encrypt = require('./../../Controllers/Encryption/hash/Encrypt');
const Encrypt = new encrypt();

const decrypt = require('./../../Controllers/Encryption/hash/Decrypt');
const Decrypt = new decrypt();

const auth = require('./../../Controllers/Encryption/lib/Auth');
const Auth = new auth();

app.use(bp.json());

app.post('/select_leader',

   Auth.verifToken

, async (req, res) => {

    let code = req.body.code;
    let select_leader = req.body.select_leader;
    let event_id = req.body.event_id;
    console.log({
        code: code,
        select_leader: select_leader,
        event_id: event_id
    });
    let status = await client.funcSelectLeader(code, select_leader, event_id);
    res.send( { result : Encrypt.chashO( {status: true, result: status} ) } );

});

module.exports = app;