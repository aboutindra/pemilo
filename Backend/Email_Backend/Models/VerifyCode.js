var ObjectId = require('mongodb').ObjectId;

class VerifyCode {

    async verifyCode(colCodeEmail, colAdmin, accParam) {
        let statusVerifyCode = false;
        /*let checkIfCodeOnDB = await colCodeEmail.find({verification_code: code}).toArray();
        if (checkIfCodeOnDB.length === 0) {
            console.log(checkIfCodeOnDB, "no");
            return false;
        } else {
            let modifyStatusAccountOnAdmin = await colAdmin.findOneAndUpdate({_id: ObjectId(code)}, {$set: {statusAccount: true}});
            console.log(checkIfCodeOnDB, "yes", modifyStatusAccountOnAdmin);
            return true;
        }*/
        let checkIfCodeOnDB = await colCodeEmail.findOneAndUpdate(accParam, {$set: {status_verification: true}})
            .then(function () {
                statusVerifyCode = true;
            });
        return statusVerifyCode;
    }
}

module.exports = VerifyCode;