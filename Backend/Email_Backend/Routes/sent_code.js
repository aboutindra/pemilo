const Model = require('../Models/Index');
const mdl = new Model();

class sent_code {

    processCodeSignUp(email, verifCode) {
        let param = {email: email, verification_code: verifCode};
        console.log(param);
        return mdl.sentCodeSignUp(param);
    }

}

module.exports = sent_code;