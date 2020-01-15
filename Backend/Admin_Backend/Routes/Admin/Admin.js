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

    funcSignUp(accParam) {
        console.log(accParam.email, " | ", accParam.password, " | ", accParam.school, " | ", accParam.balance);
        return mdl.signUpAdmins(accParam);
    }

}

module.exports = Admin;