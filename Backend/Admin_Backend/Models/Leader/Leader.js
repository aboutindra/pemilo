const ObjectId = require('mongodb').ObjectId;

class Leader {

    async insertLeader(leaderCol, eventCol, leaderParam) {
        let checkEventId, statusInsertLeader, checkInsertLeader, checkLeader;

        checkEventId = await eventCol.find({
            _id: ObjectId(leaderParam.events_id),
            admins_id: leaderParam.admins_id
        }).toArray();
        checkInsertLeader = await leaderCol.insert(leaderParam);
        checkLeader = await leaderCol.find(leaderParam).toArray();

        statusInsertLeader = {
            result: checkEventId,
            status: false
        };


        if (checkEventId.length !== 0) {
            console.log("Event Ketemu");
            if (checkInsertLeader) {
                console.log("Sudah masuk ke Leader");
                statusInsertLeader = {
                    result_event: checkEventId,
                    result_leader: checkLeader,
                    status: true
                };
                console.log(statusInsertLeader);
            }

        }
        return statusInsertLeader;
    }

    async pullLeader(leaderCol, idParam) {
        let findLeaderByEventId, statusPullLeader;

        findLeaderByEventId = await leaderCol.find(idParam).toArray();


        console.log(findLeaderByEventId);

        if ((findLeaderByEventId.length === 0) ? statusPullLeader = {status: false} : statusPullLeader = {
            status: true,
            result: findLeaderByEventId
        }) ;
        console.log("\n Returnya : \n", statusPullLeader);
        return statusPullLeader;
    }

    async insertSelectLeader(selectLeadersCol, leadersCol, eventsCol, selectParam) {
        let statusInsertSelectLeader = false;
        let checkFindEventsId = await eventsCol.find({_id: ObjectId(selectParam.events_id)}).toArray();
        let checkFindLeadersId = await leadersCol.find({_id: ObjectId(selectParam.leaders_id)}).toArray();
        let countTotalLeader = await leadersCol.find({events_id: selectParam.events_id}).toArray();
        let checkFindUniqueDevice = await selectLeadersCol.find({
            events_id: selectParam.events_id,
            unique_device: selectParam.unique_device
        });

        if (checkFindEventsId.length !== 0 && checkFindLeadersId.length !== 0) {

            if (countTotalLeader <= checkFindEventsId[0].total_user && checkFindUniqueDevice.length === 0) {
                await selectLeadersCol.insertOne(selectParam);
                statusInsertSelectLeader = true;
            }

        }
        return statusInsertSelectLeader;
    }
}

module.exports = Leader;