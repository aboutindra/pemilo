const Mongo = require('mongodb').MongoClient;
const ID = require('mongodb').ObjectID;

class MongoDB{

    constructor(url){
        this.url = url;
    }

    checkConnection(){
        /*Mongo.connect("mongodb://localhost:27017/pemilo", {useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
            if(err){
                console.log(err);
                return `Err ${err}`
            }
            else{
                return "Database [status:'running']"
            }
           });*/

        Mongo.connect(this.url, {useNewUrlParser:true, useUnifiedTopology:true} , function(err, db) {
            if(err){
                console.log("Error : ", err);
                return `Err ${err}`
            }else{
                return console.log("Database [status:'running']");
            }
        });
    }

}

module.exports = MongoDB;