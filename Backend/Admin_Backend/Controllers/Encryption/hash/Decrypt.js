const cry = require('crypto-js');

class De{

    constructor(){
        this.keySize    = 256;
        this.ivSize     = 128;
        this.iterations = 100;
    }

    crash(param){
        const salt      = cry.enc.Hex.parse(param.substr(0, 32));
        const iv        = cry.enc.Hex.parse(param.substr(32, 32));
        const encrypted = param.substring(64);

        const key = cry.PBKDF2(process.env.K, salt, {
            keySize     : this.keySize/32,
            iterations  : this.iterations
        });

        const res = cry.AES.decrypt(encrypted, key, {
            iv          : iv,
            padding     : cry.pad.Pkcs7,
            mode        : cry.mode.CBC

        });
        const hsl = res.toString(cry.enc.Utf8);
        return hsl;
    }

}

module.exports = De;