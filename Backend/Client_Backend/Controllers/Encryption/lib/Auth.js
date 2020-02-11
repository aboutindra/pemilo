const jwt = require('jsonwebtoken');

require('dotenv').config();

class Auth{

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