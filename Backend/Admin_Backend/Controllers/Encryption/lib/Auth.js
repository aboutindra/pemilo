const jwt = require('jsonwebtoken');

require('dotenv').config();

class Auth{

    async createToken(req, res){

        const tkn = await jwt.sign({scrt:process.env.RANDOM}, process.env.T,{ expiresIn:60});
        res.cookie('k',{token:tkn, type:'bearer'});
        res.send({result:{token:tkn, tipe:"Bearer"}});

    }

    async verifToken(req, res, next){
        try {
            const tkn = req.headers["authorization"];
            if(tkn){
                const bearer = tkn.split(' ');
                const bearerToken = bearer[1];
                const resp = await jwt.verify(bearerToken, process.env.T);
                req.token = resp;
                next();
            }
            else{
                res.send({result:"Authorization"});
            }
        } catch (err) {
            res.send({result:"Authorization"});
        }
    }
}

module.exports = Auth;