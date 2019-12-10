const Model = require('../../Models/Index');
const mdl = new Model("mongodb://127.0.0.1:27017/pemilo");

class Admin {    

    funcLogin(usr,pas){
        let param = {username: usr, password: pas};
        return mdl.checkForLogin(param);
    }

}

module.exports = Admin;