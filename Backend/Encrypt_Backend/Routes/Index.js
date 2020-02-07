const express = require('express');
const app = express.Router();

const ctrl = require('./../Controllers/Index');
const Control = new ctrl();

app.post('/e', async (req, res) => {

    let encryptedRequest = req.body.request;
    let checkedRequest = await Control.checkRequest(encryptedRequest);
    res.send( { result : checkedRequest } );

});

module.exports = app;
