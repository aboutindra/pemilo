const Mongo = require('mongodb').MongoClient;

const Schema = require('./Schema');
const sch = new Schema();

const Account = require('./Admin/Account');
const acc = new Account();

class MongoDB{

    constructor(url){
        
        this.url = url;
        this.db  = ''
        this.adm = '';

        this.startSetup();

    }

    startSetup(){
        Mongo.connect(this.url, {useNewUrlParser:true, useUnifiedTopology:true}, (err, con) => {
            this.db  = con.db('pemilo');            
            this.adm = this.db.collection('Admins'); 
        });
    }

    pullAllAdmins(){        
        return {res: acc.getDataAll(this.adm)};
    }

    checkForLogin(param){    
        return acc.executeLogin(this.adm, param);
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