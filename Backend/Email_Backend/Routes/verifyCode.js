const model = require('../Models/Index');
const mdl = new model();

class verifyCode {
    processCode(code) {
        return mdl.sentCodeVerify(code);
    }
}

module.exports = verifyCode;