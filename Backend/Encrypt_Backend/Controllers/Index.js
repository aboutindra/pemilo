const dec = require('./Decrypt/Index');
const Decrypt = new dec();

const enc = require('./Encrypt/Index');
const Encrypt = new enc();

class ControllerIndex {

    checkRequest( req_id ){
        Decrypt
    }

}

module.exports = ControllerIndex;