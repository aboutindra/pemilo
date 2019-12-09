const Mongo = require('mongodb').MongoClient;
const ID = require('mongodb').ObjectID;

class MongoDB{

    constructor(url){this.url = url;}

    checkConnection(){
        Mongo.connect(this.url, {useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
            if(err){return `Err ${err}`}
            else{ return "Database [status:'running']" }
        });
    }

}

module.exports = MongoDB;