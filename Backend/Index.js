const express = require('express');
const app = express();

const bp = require('body-parser');
const cors = require('cors');

const Mongo = require('./Models/Connect');

const mongo = new Mongo("mongodb://localhost:27017/pemilo");

app.use(express.static(__dirname));
app.use(bp.json());
app.use(cors());

app.listen(4000, (err)=>{

    if(err){console.log("Error")}

    else{
        console.log("Server [status:running]");
    }

    console.log(mongo.checkConnection());

})
