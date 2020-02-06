const express = require('express');
const app = express();

const bp = require('body-parser');
const cors = require('cors');

const Mongo = require('./Models/Index');
const mongo = new Mongo("mongodb://127.0.0.1:27017/pemilo");

const Admin = require('./Routes/Admin/Index');

app.use(express.static(__dirname));
app.use(bp.json());
app.use(cors());

app.use('/', Admin);

app.listen(4000, async (err)=>{
    
    if(err){console.log("Error")}
    else{console.log("Server http://localhost:4000/ [Admin:running]");}
    app.post("*", (req,res) => { res.send({ status : "OK" }) });
    app.delete("*", (req,res) => { res.send({ status : "OK" }) });
    app.get("*", (req,res) => { res.send({ status : "OK" }) });
    app.put("*", (req,res) => { res.send({ status : "OK" }) });
    await mongo.createCollectionRequire();
    await mongo.checkConnection();    

});

