const Model = require('../../Models/Index');
const mdl = new Model("mongodb://127.0.0.1:27017/pemilo");

class Admin {    

    funcGetAll(admins_id){        
        return mdl.pullAllAdmins(admins_id);
    }

    funcLogin(accountParam) {
        console.log(accountParam);
        return mdl.checkForLogin(accountParam);
    }

    funcSignUp(email, password, codeAdmin, balance) {
        console.log(email, " | ", password, " | ", balance);
        let account = {email: email, password: password, balance: balance};
        return mdl.signUpAdmins(account);
    }

}

module.exports = Admin;