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
    res.send({result: await adm.funcGetAll()});
});

module.exports = app;