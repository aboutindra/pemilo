// Segala sesuatu yang berhubungan dengan akun
// Contoh: *login,*signup,*changeProfile.

class Account{
    
    getDataAll(col){

        let dat = [];        

        dat = col.find({}).toArray();
            
        return dat;

    }

    executeLogin(col, param){
            
        let dat = [];
        let sta = false;        

        dat = col.find(param).toArray();        

        return sta = ((dat) ? true : false);

    }

}

module.exports = Account