
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
}

module.exports = Account;