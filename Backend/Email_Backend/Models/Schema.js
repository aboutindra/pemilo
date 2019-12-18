class Schema {

    createCollectionAll(err, con) {
        this.createCollectionAdmins(err, con);
    }

    createCollectionAdmins(err, con) {
        let db = con.db('pemilo');
        if (err) console.log(err);
        db.createCollection("CodeEmail", (err) => {
            if (err) console.log(err);
            console.log("Collection CodeEmail created.");
        });
    }

}

module.exports = Schema;

