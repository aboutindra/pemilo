const Model = require('../Models/Index');
const mdl = new Model();

class sentCode {

    processCodeSignUp(accParam) {
        return mdl.sentCodeSignUp(accParam);
    }

}

module.exports = sentCode;