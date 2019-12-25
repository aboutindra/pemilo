class Leader {
    insertLeader(leaderCol, leaderParam) {
        leaderCol.insertOne(leaderParam).then(function () {
            return true
        }).catch(function () {
            return false
        });
    }

    pullLeader(leaderCol, events_id) {
        let findLeaderByEventId, statusPullLeader;

        findLeaderByEventId = leaderCol.find({events_id: events_id}).toArray();

        if ((findLeaderByEventId.length === 0) ? statusPullLeader = false : statusPullLeader = {
            status: true,
            result: findLeaderByEventId
        }) ;

        return statusPullLeader;
    }
}

module.exports = Leader;