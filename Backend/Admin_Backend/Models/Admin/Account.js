// Segala sesuatu yang berhubungan dengan akun
// Contoh: *login,*signup,*changeProfile.
const nf = require('node-fetch');

class Account{
    
    getDataAll(col) {

        let dat;        

        dat = col.find().toArray();
            
        return dat;

    }

    async executeLogin(col, param){

        let dat;
        let sta = false;           

        dat =  await col.find(param).toArray();        

        sta = (( dat !== "") ? true : false);

        return sta;

    }

    async executeSignUp(code_email, data, account) {
        let dat, dat2, sentToCodeEmailCol, sentToCodeEmailColBody;
        let status = false;

        dat = await data.insertOne(account);

        dat2 = await data.find(account._id).toArray().then(async function () {
            const nf = require('node-fetch');
            let body = {email: account.email, unique_code: account._id};
            let sentToCodeEmailColBody = {admins_id: account._id, unique_code: account._id};
            sentToCodeEmailCol = await code_email.insertOne(sentToCodeEmailColBody);
            nf('http://localhost:3000/sent_code', {
                method: 'post',
                body: JSON.stringify(body),
                headers: {'Content-Type': 'application/json'}
            })
        });


        status = ((dat !== "") ? true : false);
    }

    async executeSignUp(code_email, data, account) {
        let dat, dat2, dat3, sentToCodeEmailCol, unique_code;
        let status = false;

        /*sentToCodeEmailCol = await code_email.insertOne({ admins_id : account._id, unique_code : hash  })*/
        dat2 = await data.find({email: account.email}).toArray();
        if (dat2.length === 0) {
            dat = await data.insertOne(account);
            dat3 = await data.find(account._id).toArray().then(async function () {
                sentToCodeEmailCol = await code_email.insertOne({
                    admins_id: account._id,
                    unique_code: account._id
                }).then(async function () {
                    let body = {email: account.email, unique_code: account._id};
                    nf('http://localhost:3000/sent_code', {
                        method: 'post',
                        body: JSON.stringify(body),
                        headers: {'Content-Type': 'application/json'}
                    })
                });
                return true;
            }).catch(function () {
                return false;
            });
        } else {
            dat2 = false;
        }

        console.log(dat2);
        status = ((dat !== "" && dat2) ? true : false);

        return status;
    }

}

module.exports = Account;