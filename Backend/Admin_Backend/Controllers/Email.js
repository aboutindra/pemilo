const nf = require('node-fetch');

class email {
    async PostToEmail(accountParam) {
        console.log(accountParam);
        let body;

        /*nf('http://localhost:3000/sent_code', {
            method : 'post',
            body : JSON.stringify(accountParam),
            headers : { 'Content-Type': 'application/json' }
        });*/
        /*nf('http://localhost:3000/sent_code', { method : 'POST', body : JSON.stringify(accountParam) }).then(function () {
            console.log("Sukses POST");
            return true;
        }).catch(function () {
            console.log("Gagal POST");
            return false;
        })*/
        body = {email: accountParam.email, verification_code: accountParam.verification_code};
        nf('http://localhost:3000/sent_code', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        });
        if (nf) {
            return true;
        } else {
            return false;
        }
    }

    generateVerificationCode() {
        let unique_code = Math.floor(1000 + Math.random() * 9000);
        return unique_code;
    }
}

module.exports = email;