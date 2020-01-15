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

        console.log(ObjectId(idParam.events_id));
        
        findLeaderByEventId = await leaderCol.find({events_id: ObjectId(idParam.events_id)}).toArray();

        console.log(findLeaderByEventId);

        if (findLeaderByEventId.length !== 0 ? statusPullLeader = findLeaderByEventId : statusPullLeader = findLeaderByEventId) ;

        return statusPullLeader;
    }

    async insertSelectLeader(uniqueDeviceCol, leadersCol, eventsCol, selectParam) {
        let statusInsertSelectLeader = false;

        let totalVoteInLeadersCol = await leadersCol.find({_id: ObjectId(selectParam.leaders_id)}).toArray();
        let totalVoteInEventsCol = await eventsCol.find({_id: ObjectId(selectParam.events_id)}).toArray();
        let checkFindUniqueDeviceCol = await uniqueDeviceCol.find({
            unique_device: selectParam.unique_device,
            events_id: selectParam.events_id
        }).toArray();

        if (checkFindUniqueDeviceCol.length === 0) {

            if (totalVoteInLeadersCol[0].total_vote <= totalVoteInEventsCol[0].total_user) {

                let insertUniqueDeviceCol = await uniqueDeviceCol.insertOne(selectParam);
                let totalVote = totalVoteInLeadersCol[0].total_vote + 1;
                let updateTotalVoteInLeadersCol = await leadersCol.findOneAndUpdate({_id: ObjectId(selectParam.leaders_id)}, {$set: {total_vote: totalVote}});

                if (updateTotalVoteInLeadersCol && insertUniqueDeviceCol ? statusInsertSelectLeader = true : statusInsertSelectLeader = false) ;


            }

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