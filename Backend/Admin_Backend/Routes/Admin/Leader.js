const Model = require('../../Models/Index');
const mdl = new Model("mongodb://127.0.0.1:27017/pemilo");

class Leader {

    funcAddLeader(leaderParam) {
        return mdl.funcAddLeader(leaderParam);
    }

}

module.exports = Leader;