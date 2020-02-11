const jwt = require('jsonwebtoken');

require('dotenv').config();

class Auth{

    async createToken(req, res){

        try{

            const tkn = await jwt.sign({scrt:process.env.RANDOM}, process.env.T,{ expiresIn:3600});
            res.send({token:tkn, type:'bearer'});

        }catch (e) {

            if(e){ console.log("Error Token") }

        }

    }

    async verifToken(req, res, next){

        try {
            const tkn = req.headers["authorization"];
            if(tkn){
                const bearer = tkn.split(' ');
                const bearerToken = bearer[1];
                const resp = await jwt.verify(bearerToken, process.env.T);
                // req.token = resp;
                // console.log(resp);
                next();
            }
            else{
                res.send({result:"Authorizations"});
            }
        } catch (err) {
            res.send({result:"Authorization", err : err});
        }
    }
}

module.exports = Auth;