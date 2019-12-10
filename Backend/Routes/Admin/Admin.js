const mongoose = require('mongoose');
const adminModels = require('./../../Models/Database').Admin;

class Admin {
    constructor(){
        this.username = "";
        this.password = "";
    }
    funcLogin(username, password){
        this.username = username;
        this.password = password;
        adminModels.findOne({username : this.username, password : this.password}, function (err, result) {
            if(err){
                console.log(err, "false");
                return 'salah';
            }else {
                console.log(result, "true");
                return 'benar';
            }
        })
    }
}

module.exports = Admin;