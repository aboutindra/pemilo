const Mongo = require('mongodb').MongoClient;

class MongoDB{

    constructor(url){   

        this.url = url;
   
    }
}

exports.default = MongoDB;