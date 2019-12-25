const ObjectId = require('mongodb').ObjectId;

class Event {

    async funcInsertEvent(eventsCol, adminsCol, eventParam) {
        let totalPrice, checkEnoughBalance, finalBalance, statusUpdateAdminsBalance, statusInsertEvents,
            statusFuncInsertEvent;

        statusFuncInsertEvent = false;
        totalPrice = eventParam.total_user * 1000;
        checkEnoughBalance = await adminsCol.find({_id: ObjectId(eventParam.admins_id)}, {
            balance: 1,
            email: 0,
            password: 0,
            codeAdmin: 0,
            _id: 0
        }).toArray();
        console.log(checkEnoughBalance);

        if (checkEnoughBalance.length !== 0) {

            console.log("ID nya ketemu");

            if (checkEnoughBalance[0].balance >= 0 /*totalPrice*/) {

                console.log("Duitnya Pas");
                finalBalance = checkEnoughBalance[0].balance - 0 /*totalPrice*/;
                console.log(finalBalance, "<- Sisa Duitnya");
                statusUpdateAdminsBalance = await adminsCol.findOneAndUpdate({_id: ObjectId(eventParam.admins_id)}, {$set: {balance: finalBalance}});
                console.log(statusUpdateAdminsBalance);
                statusInsertEvents = await eventsCol.insertOne(eventParam);

                if (statusUpdateAdminsBalance && statusInsertEvents) {

                    console.log("Harusnya Oke");
                    statusFuncInsertEvent = true;

                }
            }
        }
        return statusFuncInsertEvent;
    }

    funcPullEventList(eventsCol, admins_id) {

        let checkEventByAdminId, resultFuncPullEventList;
        checkEventByAdminId = eventsCol.find({admins_id: ObjectId(admins_id)}).toArray();

        if (checkEventByAdminId.length === 0) {
            resultFuncPullEventList = {result: false};
            return resultFuncPullEventList;
        } else {
            resultFuncPullEventList = {result: checkEventByAdminId};
            return resultFuncPullEventList;
        }

    }
}

module.exports = Event;