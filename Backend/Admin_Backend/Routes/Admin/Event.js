const Model = require('../../Models/Index');
const mdl = new Model("mongodb://127.0.0.1:27017/pemilo");

class Event {

    funcGetEvent() {
        return mdl.pullEvent();
    }

    funcAddEvent(eventParam) {
        return mdl.addEvent(eventParam);
    }

    funcGetEventList(admins_id) {
        return mdl.pullEventList(admins_id);
    }

}

module.exports = Event;