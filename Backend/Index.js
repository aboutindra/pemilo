const express = require('express');
const app = express();

const bp = require('body-parser');
const cors = require('cors');

const Mongo = require('./Models/Connect');
const mongo = new Mongo("mongodb://localhost:27017/pemilo");

const adminRoute = require('./Routes/Admin/Index');

app.use(express.static(__dirname));
app.use(bp.json());
app.use(cors());
app.use('/api/v1/admin',adminRoute);

app.listen(4000, (err)=>{

    if(err){console.log("Error")}

    else{
        console.log("Server http://localhost:4000/ [status:running]");
    }

    /*console.log(mongo.checkConnection());*/
    mongo.checkConnection();

})
