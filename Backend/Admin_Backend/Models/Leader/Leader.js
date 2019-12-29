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

    async pullLeader(selectLeaderCol, idParam) {
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

    async insertSelectLeader(uniqueDeviceCol, leadersCol, eventsCol, selectParam) {
        let statusInsertSelectLeader = false;

        let checkFindUniqueDeviceCol = await uniqueDeviceCol.find({
            unique_device: selectParam.unique_device,
            events_id: selectParam.events_id
        }).toArray();

        if (checkFindUniqueDeviceCol.length === 0) {

            let totalVoteInLeadersCol = await leadersCol.find({_id: ObjectId(selectParam.leaders_id)}).toArray();
            let totalVote = totalVoteInLeadersCol[0].total_vote + 1;
            let updateTotalVoteInLeadersCol = await leadersCol.findOneAndUpdate({_id: ObjectId(selectParam.leaders_id)}, {$set: {total_vote: totalVote}});

            if (updateTotalVoteInLeadersCol ? statusInsertSelectLeader = true : statusInsertSelectLeader = false) ;

        }
        /*let checkFindEventsId = await eventsCol.find({_id: ObjectId(selectParam.events_id)}).toArray();
        let countTotalLeader = await selectLeadersCol.find({events_id: selectParam.events_id}).count();
        let checkFindUniqueDevice = await selectLeadersCol.find({
            events_id: selectParam.events_id,
            unique_device: selectParam.unique_device
        }).toArray();

        if (countTotalLeader <= checkFindEventsId[0].total_user && checkFindUniqueDevice.length === 0) {
            await selectLeadersCol.insertOne(selectParam);
            statusInsertSelectLeader = true;
        }*/

        return statusInsertSelectLeader;
    }
}

module.exports = Leader;