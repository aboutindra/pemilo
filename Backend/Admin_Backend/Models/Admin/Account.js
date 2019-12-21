// Segala sesuatu yang berhubungan dengan akun
// Contoh: *login,*signup,*changeProfile.

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