const express = require('express');
const app = express();

const bp = require('body-parser');
const cors = require('cors');

const Mongo = require('./Models/Index');
const mongo = new Mongo("mongodb://127.0.0.1:27017/pemilo");

const Router = require('./Routes/Index');

app.use(express.static(__dirname));
app.use(bp.json());
app.use(cors());

app.use('/', Router);

app.listen(4003, async (err)=>{
    
    if(err){console.log("Error")}
    else{console.log("Server http://localhost:4003/ [Payment:running]");}
    await mongo.createCollectionRequire();
    await mongo.checkConnection();    

});

