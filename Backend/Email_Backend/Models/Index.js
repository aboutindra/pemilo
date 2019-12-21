const Mongo = require('mongodb').MongoClient;

const Schema = require('./Schema');
const sch = new Schema();

const sent_code = require('../Controllers/SentCode');
const SentCode = new sent_code();

const verify_code = require('./VerifyCode');
const VerifyCode = new verify_code();

class MongoDB {

    constructor(url) {

        this.url = url;
        this.db = '';
        this.adm = '';

        this.startSetup();

    }

    startSetup() {
        Mongo.connect("mongodb://127.0.0.1:27017/pemilo", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err, con) => {
            this.db = con.db('pemilo');
            this.adm = this.db.collection('Admins');
            this.codeEmail = this.db.collection('CodeEmail');
        });
    }

    sentCodeSignUp(param) {
        return SentCode.sentToEmail(this.codeEmail, this.adm, param);
    }

    sentCodeVerify(accParam) {
        return VerifyCode.verifyCode(this.codeEmail, this.adm, accParam);
    }

    createCollectionRequire() {
        Mongo.connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, con) => {
            sch.createCollectionAll(err, con)
        });
    }

    checkConnection() {
        Mongo.connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
            if (err) {
                return console.log("Error : ", err);
            } else {
                return console.log("Database [status:'running']");
            }
        });
    }
}

module.exports = MongoDB;