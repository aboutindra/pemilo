const Mongo = require('mongodb').MongoClient;

const Schema = require('./Schema');
const sch = new Schema();

const Account_Admin = require('./Admin/Account');
const acc_admin = new Account_Admin();

const Account_Client = require('./Client/Account');
const usr_client = new Account_Client();

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
            this.db  = con.db('pemilo');            
            this.adm = this.db.collection('Admins');
            this.usr = this.db.collection('Users');
        });
    }

    pullAllUsers(){
        return usr_client.getDataAll(this.usr);
    }

    pullAllAdmins(){                
        return acc_admin.getDataAll(this.adm);
    }

    checkForLogin(param){
        return acc_admin.executeLogin(this.adm, param);
    }    

    checkForCode(code){
        return usr_client.checkCode(this.usr, code);
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