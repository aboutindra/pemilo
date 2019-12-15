
class Account{

    getDataAll(arr){
        let data;

        data = arr.find().toArray();

        return data;
    }

    async checkCode(col, code){
        let dat;
        let sta = false;

        dat =  await col.find(code).toArray();

        sta = (( dat !== "") ? true : false);

        return sta;
    }

    async insertVoteData(col, param){
        let data;

        data = await col.insertOne(param, function (err, res) {
            if(err) throw err;
            return res;
        })
    }
}

module.exports = Account;