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

    pullLeader(leaderCol, events_id) {
        let findLeaderByEventId, statusPullLeader;

        findLeaderByEventId = leaderCol.find({events_id: events_id}).toArray();

        if ((findLeaderByEventId.length === 0) ? statusPullLeader = {status: false} : statusPullLeader = {
            status: true,
            result: findLeaderByEventId
        }) ;

        return statusPullLeader;
    }
}

module.exports = Leader;