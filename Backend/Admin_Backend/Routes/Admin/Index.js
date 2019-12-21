const express = require('express');
const app = express.Router();

const bp = require("body-parser");

const Admin = require('./Admin');
const adm = new Admin();

app.use(bp.json());

app.post("/login", async (req,res) => {

    let usr = req.body.username;
    let pas = req.body.password;

    let sta = false;

    sta = await adm.funcLogin(usr, pas);

    res.send({result: sta});

});

app.post('/signup', async (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    let codeAdmin = req.body.code_admin;

    let status = false;
    status = await adm.funcSignUp(email, password, codeAdmin);
    console.log(status, " <- Statusnya");
    res.send({result: status});
});

app.get('/get_admin', async (req, res) => {
    res.send({result: await adm.funcGetAll()});
});

/*router.post("/admin_add_event", function (req,res,next) {
    var encryptedReq = req.body.req;
    async function compareHashReq(encryptedReq) {
        encrypt.compare(plainText,encryptedReq, function (err,result) {
            if(err || result === false){
                res.send(
                    {
                        result : result
                    }
                );
            }else{
                adminModels.find(function (err, resultAdmin) {
                    if(err) return next(err);
                    res.json(resultAdmin);
                })
            }
        })
    }
    compareHashReq(encryptedReq);
});
*/
module.exports = app;