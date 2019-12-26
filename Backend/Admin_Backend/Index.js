var express = require('express');
var app = express();
var server = require('http').Server(express);
var io = require('socket.io')(server);

const bp = require('body-parser');
const cors = require('cors');

const Mongo = require('./Models/Index');
const mongo = new Mongo("mongodb://127.0.0.1:27017/pemilo");

const Admin = require('./Routes/Admin/Index');

app.use(express.static(__dirname));
app.use(bp.json());
app.use(cors());

app.use('/', Admin);

server.listen(4000, async (err) => {
    if (err) {
        console.log("Error")
    } else {
        console.log("Server http://localhost:4000/ [status:running]");
    }
    await mongo.createCollectionRequire();
    await mongo.checkConnection();
});

/*
app.listen(4000, async (err)=>{
    
    if(err){console.log("Error")}
    else{console.log("Server http://localhost:4000/ [status:running]");}
    await mongo.createCollectionRequire();
    await mongo.checkConnection();    

});
*/

