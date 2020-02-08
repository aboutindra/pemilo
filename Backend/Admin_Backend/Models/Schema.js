const async = require('async');
class Schema{

    createCollectionAll(err, con){
        this.createCollectionAdmins(err, con);
    }

    async createCollectionAdmins(err, con){
        let db = con.db('pemilo');        
        if(err) console.log(err);

        try{
            async.parallel([
                db.createCollection("Admins", (err) => {
                    if(err) console.log(err);
                    console.log("Collection Admins created.");
                }),
                db.createCollection("CodeEmail", (err) => {
                    if(err) console.log(err);
                    console.log("Collection CodeEmail created.");
                }),
                db.createCollection("Events", (err) => {
                    if(err) console.log(err);
                    console.log("Collection Events created.");
                }),
                db.createCollection("Leaders", (err) => {
                    if(err) console.log(err);
                    console.log("Collection Leaders created.");
                }),
                db.createCollection("QRLinks", (err) => {
                    if(err) console.log(err);
                    console.log("Collection QRLinks created.");
                }),
                db.createCollection("UniqueDevice", (err) => {
                    if(err) console.log(err);
                    console.log("Collection UniqueDevice created.");
                })
            ], function (error, results) {
                if(error) { console.log("Collection failed to created, err : ", error) }
                console.log(results);
            })
        }catch (e) {
            console.log("Error while created collection")
        }
    }

}

module.exports = Schema;

