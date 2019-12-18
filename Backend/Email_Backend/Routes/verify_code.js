const model = require('../Models/Index');
const mdl = new model();

class verify_code {
    processCode(code) {
        return mdl.sentCodeVerify(code);
    }
}

module.exports = verify_code;