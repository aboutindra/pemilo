
const bp = require('body-parser');
const cors = require('cors');
const compress = require('compression');

const express = require('express');
const app = new express();

const route = require('./Routes/Index');

app.use(compress());
app.use(cors());
app.use(bp.json());

app.use("/", route);

app.listen(4004, async (err) => {
    if(err) { console.log("Encrypt failed to running, error : ", err) }

    app.post("*", (req,res) => { res.send({ status : "OK" }) });
    app.delete("*", (req,res) => { res.send({ status : "OK" }) });
    app.get("*", (req,res) => { res.send({ status : "OK" }) });
    app.put("*", (req,res) => { res.send({ status : "OK" }) });

    console.log("Server http://localhost:4004/ [Encrypt:running]");
});