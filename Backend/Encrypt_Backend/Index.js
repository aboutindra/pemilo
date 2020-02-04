
const cors = require('cors');
const compress = require('compression');

const express = require('express');
const app = new express();

const route = require('./Route/Index');
const Route = new route();

app.use(compress());
app.use(cors());

app.use("/en", Route);

app.listen(4004, async (err) => {

    if(err) { console.log("Encrypt failed to running, error : ", err) }

    app.post("*", Route.ntfnd);
    app.delete("*", Route.ntfnd);
    app.update("*", Route.ntfnd);
    app.put("*", Route.ntfnd);

    console.log("Server http://localhost:4004/ [Encrypt:running]");

});