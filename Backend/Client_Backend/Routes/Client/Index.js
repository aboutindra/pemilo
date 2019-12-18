const express = require('express');
const app = express.Router();

const bp = require("body-parser");

const Client = require('./Client');
const client = new Client();

app.use(bp.json());

app.post("/check_code", async (req,res) => {

    let code = req.body.code;
    let sta = false;
    sta = await client.funcCheckCode(code);
    res.send({result: sta});

});

app.get('/all', async (req,res)=>{
    res.send({result: await client.funcGetAll()});
});

app.post('/select_leader', async (req, res) => {

    let code = req.body.code;
    let select_leader = req.body.select_leader;
    let event_id = req.body.event_id;
    console.log({
        code: code,
        select_leader: select_leader,
        event_id: event_id
    });
    let status = await client.funcSelectLeader(code, select_leader, event_id);
    res.send({status: true, result: status});

});
module.exports = app;