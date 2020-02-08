const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = express();

const code = require('./Routes/Index.js');

const Mongo = require('./Models/Index');
const mongo = new Mongo("mongodb://127.0.0.1:27017/pemilo");

app.use(bp.json());
app.use(cors());
app.use('/', code);

app.listen(4002, async (err) => {
    if (err) {
        console.log("Error")
    } else {
        console.log("Server http://localhost:4002/ [Email:running]");
    }

    await mongo.createCollectionRequire();
    await mongo.checkConnection();
});