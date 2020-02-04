const bp = require('body-parser');

const express = require('express');
const app = express.Router();


class IndexRoute{

    ntfnd(req, res){

        res.send( { result : false } )

    }

    checkRequest(req, res){

        app.post("/cc", async (req, res) => {
            
        });

    }

}

module.exports = app, IndexRoute;