// Segala sesuatu yang berhubungan dengan akun
// Contoh: *login,*signup,*changeProfile.
const ObjectID = require('mongodb').ObjectID;

class Account{
    
    async getDataAll(adminsCol, admins_id) {

        let statusGetDataAll;

        let statusFindAdminsById = await adminsCol.find( { _id : ObjectID(admins_id) } ).toArray();

        let statusExecuteFindAdminsById = ( statusFindAdminsById.length !== 0 ? true : false );

        statusGetDataAll = { status : statusExecuteFindAdminsById, return : statusFindAdminsById };
    
        return statusGetDataAll;

    }

    async executeLogin(adminsCol, param) {

        let findAccount, statusExecuteLogin, statusFinal;
        statusExecuteLogin = false;

        findAccount = await adminsCol.find(param).toArray();

        console.log(findAccount);

        statusExecuteLogin = ((findAccount.length !== 0) ? true : false);

        statusFinal = {admins_id: findAccount[0]._id, result: statusExecuteLogin};

        return statusFinal;

    }

    async executeSignUp(emailCodeCol, adminsCol, account) {

        let checkExecuteSignUp, checkEmailDuplicate;
        
        console.log(account);
        
        checkEmailDuplicate = await adminsCol.find({email: account.email}).toArray();
        
        console.log(checkEmailDuplicate);
        
        if (checkEmailDuplicate.length === 0) { // Jika tidak ditemukan maka bisa kita Insert data nya ke Collection
             await adminsCol.insertOne(account).then(function () {
                checkExecuteSignUp = true;
            });
        } else {
            checkExecuteSignUp = false;
        }
        
        return checkExecuteSignUp;
        /*let dat, dat2, sentToCodeEmailCol, unique_code;
        let status = false;

        dat = await data.insertOne(account);
        /!*sentToCodeEmailCol = await code_email.insertOne({ admins_id : account._id, unique_code : hash  })*!/
        dat2 = await data.find(account._id).toArray().then( async function () {
            unique_code = Math.floor(1000 + Math.random() * 9000);
            sentToCodeEmailCol = await code_email.insertOne({
                admins_id: account._id,
                unique_code: unique_code
            }).then(async function () {
                let body = {email: account.email, unique_code: unique_code};
                nf('http://localhost:3000/sent_code', {
                   method : 'post',
                   body : JSON.stringify(body),
                   headers : { 'Content-Type': 'application/json' }
               })
            });
        } else {
            dat2 = false;
        }

        console.log(dat2);
        status = (( dat !== "" && dat2) ? true : false);

        return status;*/
    }

}

module.exports = Account;