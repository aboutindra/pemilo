const cry = require('crypto-js');

class Encrypt{

    constructor(){
        this.keySize    = 256;
        this.ivSize     = 128;
        this.iterations = 100;
    }

    async chashO(param){
        const salt  = cry.lib.WordArray.random(128/8);
        const key   = cry.PBKDF2(process.env.K, salt, {
            keySize: this.keySize/32,
            iterations: this.iterations
        });
        const iv    = cry.lib.WordArray.random(128/8);
        const hsl   = cry.AES.encrypt(JSON.stringify(param),key,{
            iv: iv,
            padding: cry.pad.Pkcs7,
            mode:cry.mode.CBC
        });
        const res   = salt.toString() + iv.toString() + hsl.toString();
        return res;
    }

    async chash(param){

        const salt  = cry.lib.WordArray.random(128/8);
        const key   = cry.PBKDF2(process.env.K, salt, {
            keySize: this.keySize/32,
            iterations: this.iterations
        });
        const iv    = cry.lib.WordArray.random(128/8);
        const hsl   = cry.AES.encrypt(param,key,{
            iv: iv,
            padding: cry.pad.Pkcs7,
            mode:cry.mode.CBC
        });
        const res   = salt.toString() + iv.toString() + hsl.toString();
        return res;

    }

}

module.exports = Encrypt;