const express = require('express');
const app = express.Router();

const bp = require("body-parser");

const Admin = require('./Admin');
const adm = new Admin();

const Event = require('./Event');
const event = new Event();

const Leader = require('./Leader');
const leader = new Leader();

const auth = require('./../../Controllers/Encryption/lib/Auth');
const Auth = new auth();

const encrypt = require('./../../Controllers/Encryption/hash/Encrypt');
const Encrypt = new encrypt();

const decrypt = require('./../../Controllers/Encryption/hash/Decrypt');
const Decrypt = new decrypt();

app.use(bp.json());

app.post("/signin",

    Auth.verifToken

, async ( req, res ) => {

    let email = req.body.email;
    let password = req.body.password;
    let accountParam = {email: email, password: password};

    res.send( { result : Encrypt.chashO(await adm.funcLogin(accountParam)) } );

});

app.post('/signup', Auth.verifToken, async (req, res)=>{

    console.log( req.body );
    let email = req.body.email;
    let password = req.body.password;
    let organization = req.body.organization;
    let accParam = { email : email, password : password, organization : organization };
    res.send( { result : Encrypt.chashO( { result : await adm.funcSignUp(accParam) } ) } );

});

app.post('/get_admin',

 Auth.verifToken

, async ( req, res ) => {

    let admins_id = req.body.admins_id;
    res.send( { result : Encrypt.chashO( await adm.funcGetAll(admins_id) ) } );

});

//Event

app.post('/add_event',

    Auth.verifToken

, async ( req, res ) => {

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

    res.send({result: Encrypt.chashO( await event.funcAddEvent(eventParam) )});

});

app.post('/get_event_list',

    Auth.verifToken

, async (req, res) => {

    let admins_id = req.body.admins_id;
    res.send( { result : Encrypt.chashO( await event.funcGetEventList(admins_id) ) } )

});

//Leader.js

app.post('/add_leader',

    Auth.verifToken

, async (req, res) => {
    let admins_id = req.body.admins_id;
    let events_id = req.body.events_id;
    let candidate = req.body.candidate;
    let total_vote = 0;
    let leaderParam = {admins_id: admins_id, events_id: events_id, candidate: candidate, total_vote: total_vote};

    console.log(leaderParam);

    res.send( { result : Encrypt.chashO( await leader.funcAddLeader(leaderParam) ) } );
});

app.post('/get_leader',

    Auth.verifToken

, async (req, res) => {

    let events_id = req.body.events_id;
    let admins_id = req.body.admins_id;

    let idParam = {events_id: events_id, admins_id: admins_id};

    res.send( { result : Encrypt.chashO( await leader.funcGetLeader(idParam) ) } );

});

app.post('/select_leader',

  Auth.verifToken

, async (req, res) => {

    let leaders_id = req.body.leaders_id;
    let events_id = req.body.events_id;
    let unique_device = req.body.unique_device;

    let selectParam = {leaders_id: leaders_id, events_id: events_id, unique_device: unique_device};

    res.send({result: Encrypt.chash(await leader.funcSelectLeader(selectParam))});

});

app.post('/gt', Auth.createToken);

/*
    router.post("/admin_add_event", function (req,res,next) {
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