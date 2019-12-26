const express = require('express');
const app = express.Router();

const bp = require("body-parser");

const Admin = require('./Admin');
const adm = new Admin();

const Event = require('./Event');
const event = new Event();

const Leader = require('./Leader');
const leader = new Leader();

app.use(bp.json());

app.post("/signin", async (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    let accountParam = {email: email, password: password};

    res.send(await adm.funcLogin(accountParam));

});

app.post('/signup', async (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    let balance = 0;

    let status = false;
    status = await adm.funcSignUp(email, password, balance);
    console.log(status, " <- Statusnya");
    res.send({result: status});
});

app.get('/get_admin', async (req, res) => {
    res.send({result: await adm.funcGetAll()});
});

//Event

app.post('/add_event', async (req, res) => {

    let adminsID = req.body.admins_id;
    let eventTitle = req.body.event_title;
    let eventDescription = req.body.event_description;
    let eventOrganization = req.body.event_organization;
    let totalCandidate = req.body.total_candidate;
    let totalUser = req.body.total_user;
    let eventStart = req.body.event_start;
    let eventEnd = req.body.event_end;

    let eventParam = {
        admins_id: adminsID,
        event_title: eventTitle,
        event_description: eventDescription,
        event_organization: eventOrganization,
        total_candidate: totalCandidate,
        total_user: totalUser,
        event_start: eventStart,
        event_end: eventEnd
    };

    res.send({result: await event.funcAddEvent(eventParam)});

});

app.post('/get_event_list', async (req, res) => {
    let admins_id = req.body.admins_id;
    res.send(await event.funcGetEventList(admins_id))
});


//Leader.js

app.post('/add_leader', async (req, res) => {

    let events_id = req.body.events_id;
    let candidate = req.body.candidate;
    let leaderParam = {events_id: events_id, candidate: candidate};

    res.send({result: await leader.funcAddLeader(leaderParam)});

});

app.post('/get_leader', async (req, res) => {

    let events_id = req.body.events_id;

    res.send({result: leader.funcGetLeader(events_id)});
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