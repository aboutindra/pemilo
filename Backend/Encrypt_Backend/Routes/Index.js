const bp = require('body-parser');

const express = require('express');
const app = express.Router();

app.post('/e', async (req, res) => {

    let encryptedRequest = req.body.request;
    let decryptedRequest =
    res.send( { status : "Good" } )

});

module.exports = app;
