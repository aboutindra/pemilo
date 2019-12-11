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

        sta = (( dat != "") ? true : false)        

        return sta;

    }

}

module.exports = Account