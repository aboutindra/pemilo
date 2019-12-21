const Model = require('../../Models/Index');
const mdl = new Model("mongodb://127.0.0.1:27017/pemilo");

class Admin {    

    funcGetAll(){        
        return mdl.pullAllAdmins();
    }

    funcLogin(usr,pas){
        let param = {username: usr, password: pas};
        return mdl.checkForLogin(param);
    }

    funcSignUp(email, password, codeAdmin, balance) {
        console.log(email, " | ", password, "| ", codeAdmin, " | ", balance);
        let account = {email: email, password: password, codeAdmin: codeAdmin, balance: balance};
        return mdl.signUpAdmins(account);
    }

}

module.exports = Admin;