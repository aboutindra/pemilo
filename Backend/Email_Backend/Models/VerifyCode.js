var ObjectId = require('mongodb').ObjectId;

class VerifyCode {

    async verifyCode(colCodeEmail, colAdmin, code) {
        let checkIfCodeOnDB = await colCodeEmail.find({unique_code: ObjectId(code)}).toArray();
        if (checkIfCodeOnDB.length === 0) {
            console.log(checkIfCodeOnDB, "no");
            return false
        } else {
            let modifyStatusAccountOnAdmin = await colAdmin.findOneAndUpdate({_id: ObjectId(code)}, {$set: {statusAccount: true}});
            console.log(checkIfCodeOnDB, "yes", modifyStatusAccountOnAdmin);
            return true
        }
    }
}

module.exports = VerifyCode;