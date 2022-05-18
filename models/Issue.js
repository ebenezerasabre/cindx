const res = require("express/lib/response");

class Issue{
    constructor(_id, userID, type, details, resolved, date){
        this._id = _id;
        this.userID = userID;
        this.type = type;
        this.details = details;
        this.resolved = resolved;
        this.date = date;
        
    }
}
module.exports = Issue;