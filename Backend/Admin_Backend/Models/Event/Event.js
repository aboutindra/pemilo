const ObjectId = require('mongodb').ObjectId;
const qrcode = require('./../Event/QRCode');
const QRCode = new qrcode();

class Event {

    async funcInsertEvent(qrCol, eventsCol, adminsCol, eventParam) {
        let totalPrice, checkEnoughBalance, finalBalance, statusUpdateAdminsBalance, statusInsertEvents,
            statusFuncInsertEvent, getEventId, QRParameter;

        statusFuncInsertEvent = false;
        totalPrice = eventParam.total_user * 1000;
        checkEnoughBalance = await adminsCol.find({_id: ObjectId(eventParam.admins_id)}).toArray();
        console.log(checkEnoughBalance);

        if (checkEnoughBalance.length !== 0) {

            console.log("ID nya ketemu");

            if (checkEnoughBalance[0].balance >= 0 /*totalPrice*/) {

                console.log("Duitnya Pas");
                finalBalance = checkEnoughBalance[0].balance - 0 /*totalPrice*/;
                console.log(finalBalance, "<- Sisa Duitnya");
                statusUpdateAdminsBalance = await adminsCol.findOneAndUpdate({_id: ObjectId(eventParam.admins_id)}, {$set: {balance: finalBalance}});
                console.log(statusUpdateAdminsBalance);
                getEventId = await eventsCol.find({admins_id: eventParam.admins_id}).toArray();
                QRParameter = {
                    admins_id: checkEnoughBalance[0]._id,
                    events_id: getEventId[0]._id
                };
                let qr_link = await QRCode.convertQRLink(qrCol, QRParameter);
                statusInsertEvents = await eventsCol.insertOne(
                    {
                        admins_id: eventParam.admins_id,
                        event_title: eventParam.event_title,
                        event_description: eventParam.event_description,
                        event_organization: eventParam.event_organization,
                        total_candidate: eventParam.total_candidate,
                        total_user: eventParam.total_user,
                        event_start: eventParam.event_start,
                        event_end: eventParam.event_end,
                        qr_link: qr_link
                    }
                );

                if (statusUpdateAdminsBalance && statusInsertEvents) {

                    console.log("Harusnya Oke");

                    statusFuncInsertEvent = {
                        admins_id: checkEnoughBalance[0]._id,
                        events_id: getEventId[0]._id,
                        qr_link: qr_link
                    };
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
            resultFuncPullEventList = {result: true};
            return resultFuncPullEventList;
        }

    }
}

module.exports = Event;