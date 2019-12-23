const express = require('express');
const app = express.Router();

const bp = require("body-parser");

const Admin = require('./Admin');
const adm = new Admin();

const Event = require('./Event');
const event = new Event();

app.use(bp.json());

app.post("/login", async (req,res) => {

    let email = req.body.email;
    let password = req.body.password;
    let accountParam = {email: email, password: password};

    res.send({result: await adm.funcLogin(accountParam)});

});

app.post('/signup', async (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    let codeAdmin = req.body.code_admin;
    let balance = 0;

    let status = false;
    status = await adm.funcSignUp(email, password, codeAdmin, balance);
    console.log(status, " <- Statusnya");
    res.send({result: status});
});

app.get('/get_admin', async (req, res) => {
    res.send({result: await adm.funcGetAll()});
});

app.post('/add_event', async (req, res) => {

    let adminsID = req.body.admins_id;
    let eventTitle = req.body.event_title;
    let eventDescription = req.body.event_description;
    let eventOrganization = req.body.event_organization;
    let eventCode = req.body.event_code;
    let totalCandidate = req.body.total_candidate;
    let totalUser = req.body.total_user;
    let eventStart = req.body.event_start;
    let eventEnd = req.body.event_end;

    let eventParam = {
        admins_id: adminsID,
        event_title: eventTitle,
        event_description: eventDescription,
        event_organization: eventOrganization,
        event_code: eventCode,
        total_candidate: totalCandidate,
        total_user: totalUser,
        event_start: eventStart,
        event_end: eventEnd
    };

    res.send({result: await event.funcAddEvent(eventParam)});

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