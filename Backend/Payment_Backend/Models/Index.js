const Mongo = require('mongodb').MongoClient;

const Schema = require('./Schema');
const sch = new Schema();

class MongoDB{

    constructor(url){
        
        this.url = url;
        this.db  = '';
        this.adm = '';
        this.usr = '';
        this.startSetup();

    }

    startSetup(){
        Mongo.connect(this.url, {useNewUrlParser:true, useUnifiedTopology:true}, (err, con) => {
            this.db = con.db('pemilo');
            this.usr = this.db.collection('Users');
        });
    }

    createCollectionRequire(){
        Mongo.connect(this.url, {useNewUrlParser:true, useUnifiedTopology:true}, (err, con)=>{
            sch.createCollectionAll(err, con)
        });
    }

    checkConnection(){
        Mongo.connect(this.url, {useNewUrlParser:true, useUnifiedTopology:true} , function(err) {
            if(err){
                return console.log("Error : ", err);                
            }else{
                return console.log("Database [status:'running']");
            }
        });
    }
}

module.exports = MongoDB;