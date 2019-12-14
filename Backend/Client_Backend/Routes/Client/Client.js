const Model = require('../../Models/Index');
const mdl = new Model("mongodb://127.0.0.1:27017/pemilo");

class Client {

    funcGetAll(){
        return mdl.pullAllUsers();
    }

    funcCheckCode(code){
        let param = {code:code};
        return mdl.checkForCode(param);
    }

}

module.exports = Client;