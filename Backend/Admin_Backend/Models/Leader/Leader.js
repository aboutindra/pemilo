class Leader {
    insertLeader(leaderCol, leaderParam) {
        leaderCol.insertOne(leaderParam).then(function () {
            return true
        }).catch(function () {
            return false
        });
    }
}

module.exports = Leader;