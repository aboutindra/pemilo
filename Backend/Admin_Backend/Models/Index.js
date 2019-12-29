const Mongo = require('mongodb').MongoClient;

const Schema = require('./Schema');
const sch = new Schema();

const Account_Admin = require('./Admin/Account');
const acc_admin = new Account_Admin();

const Event = require('./Event/Event');
const eventModels = new Event();

const Leader = require('./Leader/Leader');
const leader = new Leader();

class MongoDB{

    constructor(url){

        this.url = url;
        this.db  = '';
        this.adm = '';

        this.startSetup();

    }

    startSetup(){
        Mongo.connect(this.url, {useNewUrlParser:true, useUnifiedTopology:true}, (err, con) => {
            this.db = con.db('pemilo');
            this.adm = this.db.collection('Admins');
            this.codeEmail = this.db.collection('CodeEmail');
            this.event = this.db.collection('Events');
            this.leader = this.db.collection('Leaders');
            this.qrlink = this.db.collection('QRLinks');
            this.uniqueDevice = this.db.collection('UniqueDevice');
        });
    }


    //Admin.js

    pullAllAdmins() {
        return acc_admin.getDataAll(this.adm);
    }

    checkForLogin(accountParam) {
        return acc_admin.executeLogin(this.adm, accountParam);
    }


    //Event.js

    pullEvent() {

    }

    pullEventList(admins_id) {
        return eventModels.funcPullEventList(this.event, admins_id);
    }

    addEvent(eventParam) {
        return eventModels.funcInsertEvent(this.qrlink, this.event, this.adm, eventParam);
    }

    //Leader.js
    funcAddLeader(leaderParam) {
        return leader.insertLeader(this.leader, this.event, leaderParam);
    }

    funcGetLeader(events_id) {
        return leader.pullLeader(this.selectLeader, events_id);
    }

    funcInsertSelectLeader(selectParam) {
        return leader.insertSelectLeader(this.uniqueDevice, this.leader, this.event, selectParam);
    }

    //For Signup

    signUpAdmins(account) {
        return acc_admin.executeSignUp(this.codeEmail, this.adm, account);
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